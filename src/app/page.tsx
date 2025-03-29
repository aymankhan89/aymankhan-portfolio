import { FullScreen } from "@/components/full-screen"
import { MyInformation } from "@/containers/my-information"
import { MyUniverse } from "@/containers/my-universe"

export default function Home() {
  return (
    <div>
      <FullScreen className="w-full xl:w-[85%] mx-auto">
        <MyUniverse />
      </FullScreen>

      <FullScreen className="w-full xl:w-[85%] mx-auto flex flex-col gap-6">
        <MyInformation />
      </FullScreen>
    </div>
  )
}
