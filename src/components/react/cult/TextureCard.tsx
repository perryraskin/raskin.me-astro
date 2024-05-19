import * as React from "react"

import { cn } from "@/lib/utils"

const TextureCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-[24px] border border-white/60 dark:border-stone-950/60",
      "bg-gradient-to-b from-neutral-100 to-white/70 dark:from-neutral-800 dark:to-neutral-900",
      className,
    )}
    {...props}
  >
    {/* Nested structure for aesthetic borders */}
    <div className="rounded-[23px] border  border-black/10 dark:border-neutral-900/80 ">
      <div className="rounded-[22px] border  border-white/50 dark:border-neutral-950">
        <div className="rounded-[21px] border  border-neutral-950/20  dark:border-neutral-900/70">
          {/* Inner content wrapper */}
          <div className="w-full max-w-[440px] rounded-[20px] border border-white/50 text-neutral-500 dark:border-neutral-700/50 ">
            {children}
          </div>
        </div>
      </div>
    </div>
  </div>
))

TextureCard.displayName = "TextureCard"

const TextureCardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "first:pt-6 last:pb-6", // Adjust padding for first and last child
        className,
      )}
      {...props}
    />
  ),
)
TextureCardHeader.displayName = "TextureCardHeader"

const TextureCardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("text-lg font-semibold leading-tight text-neutral-900 dark:text-neutral-100", className)}
      {...props}
    />
  ),
)
TextureCardTitle.displayName = "TextureCardTitle"

const TextureCardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-neutral-600 dark:text-neutral-400", className)} {...props} />
  ),
)
TextureCardDescription.displayName = "TextureCardDescription"

const TextureCardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("px-6 py-4", className)} {...props} />,
)
TextureCardContent.displayName = "TextureCardContent"

const TextureCardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex items-center justify-between gap-2 px-6  py-4",

        className,
      )}
      {...props}
    />
  ),
)
TextureCardFooter.displayName = "TextureCardFooter"

const TextureSeparator = () => {
  return (
    <div className="border border-b-neutral-300/50 border-l-transparent border-r-transparent border-t-neutral-50 dark:border-b-neutral-700/50 dark:border-t-neutral-950" />
  )
}

export {
  TextureCard,
  TextureCardContent,
  TextureCardDescription,
  TextureCardFooter,
  TextureCardHeader,
  TextureCardTitle,
  TextureSeparator,
}
