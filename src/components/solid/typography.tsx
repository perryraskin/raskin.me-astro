import { ComponentProps } from "react"

const styles = {
  blockquote: "border-l-4 border-elevate pl-4 italic font-medium my-2",
  h1: "font-bold mt-0 mb-4 text-4xl leading-tight",
  h2: "font-bold mt-10 text-2xl bg-surface leading-none sticky top-0 py-5 z-20",
  h3: "font-bold mt-10 mb-4 text-xl",
  h4: "font-bold mt-10 mb-4 text-lg",
  h5: "font-bold mt-8 mb-2 text-base",
  h6: "font-bold mt-6 mb-2 text-base",
  hr: "my-5 border-surface",
  list: "mb-6 ml-8 list-disc list-outside",
  listItem: "mb-4 leading-relaxed text-base marker:text-default",
  strong: "font-semibold",
  text: "mb-5 text-base leading-loose",
}

type HeadingProps = ComponentProps<"h1">

export const Blockquote = (props: ComponentProps<"blockquote">) => (
  <blockquote className={styles.blockquote} {...props} />
)

export const H1 = (props: HeadingProps) => <h1 className={styles.h1} {...props} />
export const H2 = (props: HeadingProps) => <h2 className={styles.h2} {...props} />
export const H3 = (props: HeadingProps) => <h3 className={styles.h3} {...props} />
export const H4 = (props: HeadingProps) => <h4 className={styles.h4} {...props} />
export const H5 = (props: HeadingProps) => <h5 className={styles.h5} {...props} />
export const H6 = (props: HeadingProps) => <h6 className={styles.h6} {...props} />
export const HR = (props: ComponentProps<"hr">) => <hr className={styles.hr} {...props} />
export const List = (props: ComponentProps<"ul">) => <ul className={styles.list} {...props} />
export const ListItem = (props: ComponentProps<"li">) => <li className={styles.listItem} {...props} />
export const Strong = (props: ComponentProps<"strong">) => <strong className={styles.strong} {...props} />
export const Text = (props: ComponentProps<"p">) => <p className={styles.text} {...props} />
