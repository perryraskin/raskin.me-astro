import { ComponentProps } from "react"

const styles = {
  base: "border-b border-black outline-none text-primary hover:border-blue-500 transition-all duration-300 ease-in-out pointer-cursor",
  focus: "ring-primary ring-offset-2 ring-offset-surface focus-visible:ring-1",
}

export const Link = (props: ComponentProps<"a">) => {
  if (props.href?.startsWith("/")) {
    return <a href={props.href} rel="prefetch" {...props} />
  }

  return (
    <a
      className={`${styles.base} ${styles.focus}`}
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  )
}
