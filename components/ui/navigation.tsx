import React, { createContext, useContext, useEffect, useMemo, useRef, useState, ReactNode, Dispatch, SetStateAction, RefObject } from "react"

type ActiveItem = {
  index: number,
  size: number,
  position: number,
}

type RootContextType = {
  setActive: (index: number, size: number, position: number) => void,
  activeItem: ActiveItem,
  isReady: boolean,
  setMounted: Dispatch<SetStateAction<boolean>>,
  isMounted: boolean,
  isFluid: boolean,
  isVertical: boolean,
  duration: number,
}

type ListContextType = {
  peers: HTMLDivElement[],
}

type ChildrenProps = {
  ready: boolean,
  position: string,
  duration: string,
  size: string,
}

const RootContext = createContext<RootContextType | undefined>(undefined)
const ListContext = createContext<ListContextType | undefined>(undefined)

type RootProps = {
  duration?: number,
  vertical?: boolean,
  fluid?: boolean,
  as?: any,
  children: (props: ChildrenProps) => ReactNode,
  className?: string,
  [key: string]: any,
}


export function Root({
  duration = 500,
  vertical = false,
  fluid = false,
  as: Component = "div",
  children,
  className,
  ...props
}: RootProps) {
  const [isReady, setReady] = useState<boolean>(false)
  const [isMounted, setMounted] = useState<boolean>(false)

  const [activeItem, setActiveItem] = useState<ActiveItem>({
    index: -1,
    size: 0,
    position: 0,
  })

  const [previousSize, setPreviousSize] = useState<number>(-1)
  const [previousPosition, setPreviousPosition] = useState<number>(0)
  const [animated, setAnimated] = useState<boolean>(true)

  function handleFluidMove(targetSize: number, targetPosition: number) {
    if (!animated) {
      return
    }

    setAnimated(false)

    if (previousSize === -1) {
      const size = targetSize
      const position = targetPosition
      setActiveItem((currentState) => ({ ...currentState, size, position }))

      setAnimated(true)
    } else {
      if (targetPosition > previousPosition) {
        const size = targetSize + targetPosition - previousPosition
        setActiveItem((currentState) => ({ ...currentState, size }))

        setTimeout(() => {
          const size = targetSize
          const position = targetPosition
          setActiveItem((currentState) => ({ ...currentState, size, position }))

          setAnimated(true)
        }, duration)
      } else {
        const position = targetPosition
        const size = previousSize + previousPosition - targetPosition

        setActiveItem((currentState) => ({
          ...currentState,
          size,
          position,
        }))

        setTimeout(() => {
          const size = targetSize

          setActiveItem((currentState) => ({ ...currentState, size }))

          setAnimated(true)
        }, duration)
      }
    }

    setPreviousSize(targetSize)
    setPreviousPosition(targetPosition)
  }

  function setActive(index: number, size: number, position: number) {
    setActiveItem((currentState) => ({ ...currentState, index }))

    if (fluid) {
      handleFluidMove(size, position)
    } else {
      setActiveItem((currentState) => ({ ...currentState, size, position }))
    }

    setReady(true)
  }

  const context = {
    setActive,
    activeItem,
    isReady,
    setMounted,
    isMounted,
    isFluid: fluid,
    isVertical: vertical,
    duration: duration,
  }

  return (
    <RootContext.Provider value={context}>
      <Component className={className} {...props}>
        {children({
          ready: isReady,
          position: `${activeItem.position}px`,
          duration: `${duration}ms`,
          size: `${activeItem.size}px`,
        })}
      </Component>
    </RootContext.Provider>
  )
}

type ListProps = {
  as?: any,
  children: ReactNode,
  className?: string,
  [key: string]: any,
}
export function List({ as: Component = "div", children, className, ...props }: ListProps) {
  const container = useRef<HTMLDivElement | null>(null)

  const [childElements, setChildElements] = useState<HTMLDivElement[]>([])

  useEffect(() => {
    if (container.current) {
      setChildElements(Array.from(container.current.children) as HTMLDivElement[])
    }
  }, [])

  const context: ListContextType = { peers: childElements }

  return (
    <ListContext.Provider value={context}>
      <Component ref={container} className={className} {...props}>
        {children}
      </Component>
    </ListContext.Provider>
  )
}

type ItemProps = {
  onActivated?: () => void,
  active?: boolean,
  as?: any,
  children: (props: { setActive: any, isActive: boolean }) => ReactNode,
  className?: string,
  [key: string]: any,
}

export function Item({ onActivated = () => { }, active = false, as: Component = "div", children, className, ...props }: ItemProps) {
  const rootContext = useContext(RootContext)
  const listContext = useContext(ListContext)

  const container = useRef<HTMLDivElement | null>(null)

  const index = useMemo(() => {
    return listContext && listContext.peers ? listContext.peers.indexOf(container.current as HTMLDivElement) : -1
  }, [listContext?.peers])

  const isActive = useMemo(() => rootContext && listContext ? index === rootContext.activeItem.index : false, [rootContext?.activeItem, index])

  // once
  useEffect(() => {
    if (active) {
      setActive(false);
    }

    if (rootContext && listContext && index === listContext.peers.length - 1) {
      rootContext.setMounted(true);
    }
  }, [index]);

  useEffect(() => {
    // set first element as active
    if (rootContext && rootContext.activeItem.index === -1 && index === 0) {
      setActive(false);
    }
  }, [rootContext?.isMounted]);

  function setActive(event: boolean | Event) {
    if (rootContext && event !== false && container.current) {
      if (rootContext.isVertical) {
        rootContext.setActive(index, container.current.getBoundingClientRect().height, container.current.offsetTop);
      } else {
        rootContext.setActive(index, container.current.getBoundingClientRect().width, container.current.offsetLeft);
      }

      setTimeout(() => onActivated(), rootContext.duration);
    }
  }

  return (
    <Component ref={container} className={className} {...props}>
      {children({ setActive, isActive })}
    </Component>
  )
}

export const Navigation = Object.assign(Root, { List, Item })
