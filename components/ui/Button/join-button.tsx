import Button from "."

export function JoinButton({ children }: { children: string }) {
  return (
    <a
      href="https://gdsc.community.dev/university-of-ibadan/"
      className="inline-block"
    >
      <Button>{children ?? `Join GDSC UNIBADAN`}</Button>
    </a>
  )
}
