import React from 'react'
import { SignedIn, UserButton } from "@clerk/nextjs"

const page = () => {
  return (
    <div>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <h1>Basic structure</h1>
      <h3>Public Routes</h3>
      <p>"/ - this route is accessible "</p>
      <p>"About"</p>
      <p>"Team"</p>
      <p>"Contact"</p>
      <p>"Login"</p>
      <p>"Register"</p>

      <h3>Private Routes</h3>
      <p>"Blogs"</p>
      <p>"Contest"</p>
      <p>"Events"</p>
    </div>
  )
}

export default page