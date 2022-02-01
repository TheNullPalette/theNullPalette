import React from "react"
import "./index.css"

const Card = () => {
  return (
    <div className="flex shrink-0 w-[350px] h-[200px] bg-white rounded-lg drop-shadow-lg">
      Card
    </div>
  )
}

export default function Testimonials() {
  const totalCards = 12

  return (
    <div style={{ backgroundColor: "pink", padding: "5%" }}>
      <h1
        style={{ fontFamily: "Lobster, serif" }}
        className="text-5xl text-center mb-10"
      >
        Testimonials
      </h1>
      {/* scrollable container containing the Testimonials */}
      <div
        className="flex gap-[20px] overflow-hidden sliding-window"
        data-children="5"
      >
        {Array(12)
          .fill(0)
          .map((x, i) => {
            return <Card key={i} />
          })}
      </div>
    </div>
  )
}
