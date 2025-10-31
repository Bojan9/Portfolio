import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import NavigationBar from "@/components/navigationBar";

export default async function Hobbies() {
  return (
    <main className="min-h-screen w-full bg-black text-white flex flex-col">
      <div className="flex-1 pt-16 pb-32 px-4">
        <h1 className="text-6xl font-bold text-center mb-4 mx-auto">Hobbies</h1>

        <div className="flex items-center justify-center gap-8">
          <CardContainer className="inter-var">
            <CardBody className="bg-black relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/10 border-2 border-blue-500/40 hover:border-blue-500/80 w-auto sm:w-[320px] rounded-xl p-6">
              <div className="space-y-6">
                <CardItem translateZ="100" className="w-full">
                  <div className="relative w-full h-[200px]">
                    <Image
                      src="/skopsko_thumbnail.png"
                      fill
                      className="object-contain rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </div>
                </CardItem>
                <CardItem
                  translateZ="50"
                  className="text-2xl font-bold text-blue-500 text-center w-full"
                >
                  Beer Collection
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-blue-400 text-base text-center w-full"
                >
                  My collection of beer bottles and cans. Started the collection
                  in 2024.
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>

          <CardContainer className="inter-var">
            <CardBody className="bg-black relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/10 border-2 border-blue-500/40 hover:border-blue-500/80 w-auto sm:w-[320px] rounded-xl p-6">
              <div className="space-y-6">
                <CardItem translateZ="100" className="w-full">
                  <div className="relative w-full h-[200px]">
                    <Image
                      src="/skopsko_thumbnail.png"
                      fill
                      className="object-contain rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </div>
                </CardItem>
                <CardItem
                  translateZ="50"
                  className="text-2xl font-bold text-blue-500 text-center w-full"
                >
                  Beer Collection
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-blue-400 text-base text-center w-full"
                >
                  My collection of beer bottles and cans. Started the collection
                  in 2024.
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </div>

      <footer className="fixed bottom-0 left-0 right-0 z-50">
        <NavigationBar />
      </footer>
    </main>
  );
}
