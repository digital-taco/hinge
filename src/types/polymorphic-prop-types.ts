/* eslint-disable @typescript-eslint/ban-types */

// This blog was followed to build these types: https://blog.logrocket.com/build-strongly-typed-polymorphic-components-react-typescript/

type AsProp<ComponentType extends React.ElementType> = {
  as?: ComponentType
}

type PropsToOmit<ComponentType extends React.ElementType, Props> = keyof (AsProp<ComponentType> &
  Props)

export type PolymorphicRef<ComponentType extends React.ElementType> =
  React.ComponentPropsWithRef<ComponentType>['ref']

export type PolymorphicProps<ComponentType extends React.ElementType, Props = {}> =
  // Add in the children prop and the as prop
  React.PropsWithChildren<Props & AsProp<ComponentType>> &
    // Add in general react component props and omit any specified props from the general props with conflicting names (i.e. we specify our own "color" or "href" prop)
    Omit<React.ComponentPropsWithRef<ComponentType>, PropsToOmit<ComponentType, Props>>

export type PolymorphicPropsWithRef<
  ComponentType extends React.ElementType,
  Props = {}
> = PolymorphicProps<ComponentType, Props> & { ref?: PolymorphicRef<ComponentType> }
