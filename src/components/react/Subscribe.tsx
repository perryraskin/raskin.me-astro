import {
  TextureCard,
  TextureCardContent,
  TextureCardFooter,
  TextureCardHeader,
  TextureCardTitle,
} from "./cult/TextureCard"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Separator } from "./ui/separator"
import { TextureButton } from "./cult/TextureButton"
import { useEffect, useState } from "react"

export default function Subscribe() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async () => {
    // event.preventDefault()
    const url = `https://raskin.us19.list-manage.com/subscribe/post-json?u=215db57bccd5e8ac098d96353&id=51e8db47ba&f_id=008d42e4f0&EMAIL=${encodeURIComponent(email)}&c=?`

    console.log(url)
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      const data = await response.json()
      if (data.result === "success") {
        setMessage("Thank you for subscribing!")
      } else {
        setMessage("Subscription failed. Please try again.")
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.")
    }
  }

  useEffect(() => {
    console.log("useEffect")
    handleSubmit()
  }, [])
  return (
    <>
      <form
      // action="https://raskin.us19.list-manage.com/subscribe/post?u=215db57bccd5e8ac098d96353&id=51e8db47ba&f_id=008d42e4f0"
      // method="post"
      // id="mc-embedded-subscribe-form"
      // name="mc-embedded-subscribe-form"
      // target="_blank"
      // onSubmit={handleSubmit}
      >
        <TextureCard className="">
          <TextureCardHeader>
            <div className="flex justify-center p-4">
              <TextureCardTitle>Subscribe to updates from me?</TextureCardTitle>
            </div>
          </TextureCardHeader>
          <Separator />
          <TextureCardContent>
            <div className="flex flex-col gap-4">
              <Label htmlFor="email">Email</Label>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="EMAIL"
                id="mce-EMAIL"
                className="w-full rounded-md border border-neutral-300 bg-white/80 px-4 py-2 placeholder-neutral-400 dark:border-neutral-700 dark:bg-neutral-800/80 dark:placeholder-neutral-500"
              />
            </div>
          </TextureCardContent>
          <Separator />
          <TextureCardFooter>
            <TextureButton
              onClick={handleSubmit}
              type="button"
              name="subscribe"
              // id="mc-embedded-subscribe"
              // value="Subscribe"
              variant="primary"
            >
              <span>Subscribe</span>
            </TextureButton>
          </TextureCardFooter>
        </TextureCard>
        {message && <p>{message}</p>}
      </form>
      <button onClick={handleSubmit}>Subscribe</button>
    </>
  )
}
