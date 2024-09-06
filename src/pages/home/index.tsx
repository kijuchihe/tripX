import Layout from '../../components/layout'
import { adventureImageData, imageData } from '../../data'
import ImageLazyLoader from '../../components/features/ImageLazyLoader'
import Container from '../../components/layout/Container'
const images = imageData.results
const adventureImages = adventureImageData.results

const HomePage = () => {
  return (
    <Layout>
      <Container isFirst>
        <div className="flex flex-wrap justify-center items-center px-4 w-full rounded-xl md:justify-between bg-primary/30">
          <div className=" w-full md:w-[48%] flex flex-col gap-4">
            <small className="flex gap-2 items-center text-xs font-light">
              <span className="text-primary">Powered by AI</span>
              <span className="text-black">
                <span className="p-1 bg-white rounded-lg">BETA</span>
              </span>
            </small>
            <p className="text-6xl font-bold text-primary">
              Get custom recs for your next trip
            </p>
            <div className="text-3xl font-bold text-primary">
              Find great eats, experiences, and more—inspired by things you
              love.
            </div>
            <div>
              <a
                className="flex gap-2 items-center px-4 py-3 text-white rounded-full bg-primary w-fit"
                data-automation="GaiEntryButton"
                href="/ai"
                target="_self"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="20px"
                  height="20px"
                  className=""
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.53 5.116a5.27 5.27 0 0 1-3.118-3.118c-.108-.294-.534-.294-.642 0a5.24 5.24 0 0 1-3.115 3.118c-.294.108-.294.534 0 .642a5.27 5.27 0 0 1 3.118 3.118c.108.294.534.294.642 0a5.27 5.27 0 0 1 3.118-3.118c.294-.108.294-.534 0-.642zm1.735-.418a.746.746 0 0 0 0 1.493c3.056 0 5.528 2.45 5.528 5.401 0 1.549-.806 3.252-2.05 4.952-1.095 1.495-2.404 2.828-3.468 3.882-1.07-1.054-2.399-2.401-3.503-3.91-1.234-1.69-2.033-3.382-2.033-4.924a.746.746 0 1 0-1.493 0c0 2.019 1.024 4.029 2.32 5.804 1.299 1.774 2.872 3.32 3.98 4.407l.04.04.16.16a.746.746 0 0 0 1.048.01l.15-.146.02-.02.053-.056.003-.002c1.102-1.09 2.645-2.613 3.927-4.362 1.306-1.785 2.339-3.808 2.339-5.835 0-3.803-3.168-6.894-7.021-6.894m-1.02 5.244a1.266 1.266 0 0 1 1.647.666 1.22 1.22 0 0 1-.678 1.599 1.266 1.266 0 0 1-1.647-.666 1.22 1.22 0 0 1 .679-1.6m-.566-1.389c1.397-.57 3.01.077 3.596 1.475a2.72 2.72 0 0 1-1.495 3.568c-1.397.57-3.01-.078-3.596-1.476a2.717 2.717 0 0 1 1.495-3.567M5.555 7.17a3.76 3.76 0 0 0 2.228 2.227h.002c.21.077.21.382 0 .459a3.77 3.77 0 0 0-2.228 2.227c-.077.21-.38.21-.458 0a3.77 3.77 0 0 0-2.227-2.227c-.21-.077-.21-.382 0-.459A3.74 3.74 0 0 0 5.097 7.17c.077-.21.381-.21.458 0"
                  ></path>
                </svg>
                <span>Start a trip with AI</span>
              </a>
            </div>
          </div>
          <div className="w-full md:w-[48%] ">
            <img
              src="https://static.tacdn.com/img2/trips/home-gai-entry-v2-dv.png"
              width="100%"
              height="100%"
              alt=""
              className="_C"
            />
          </div>
          {/* <div className="xaFzM FjASD">
            <img
              src="https://static.tacdn.com/img2/trips/home-gai-entry-v2-mv.png"
              width="100%"
              height="100%"
              alt=""
              className="_C"
            />
          </div> */}
        </div>
      </Container>
      <Container>
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="text-3xl font-bold">
              Go on an award winning adventure
            </h3>
            <p className="my-4">
              {"2024's"} Travelers’ Choice Awards Best of the Best Things To Do
            </p>
            <div className="flex flex-wrap gap-8 justify-center items-center md:justify-start">
              {adventureImages.map((image, index) => (
                <figure key={index} className="w-[300px]">
                  <ImageLazyLoader
                    imageUrl={image.urls.raw}
                    blurUrl={image.blur_hash}
                    alt={image.alt_description}
                    className="w-[300px] h-[300px] rounded-lg"
                  />

                  <figcaption className="text-wrap">
                    <h4 className="text-2xl capitalize">
                      {image.alt_description}
                    </h4>
                    <p>Reviews: 0</p>
                    <p className="text-sm">from $120 per adult</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mt-2 text-3xl font-bold">Ways to tour Lagos</h3>
            <p className="my-2">
              Book these experiences for a close-up look at Lagos
            </p>
            <div className="flex flex-wrap gap-8 justify-center items-center md:justify-start">
              {images.map((image, index) => (
                <figure key={index} className="w-[300px]">
                  <ImageLazyLoader
                    imageUrl={image.urls.raw}
                    blurUrl={image.blur_hash}
                    alt={image.alt_description}
                    className="w-[300px] h-[300px] rounded-lg"
                  />

                  <figcaption className="text-wrap">
                    <h4 className="text-2xl capitalize">
                      {image.alt_description}
                    </h4>
                    <p>Reviews: 0</p>
                    <p className="text-sm">from $120 per adult</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </Container>
      <Container className="py-4">
        <div className="flex gap-4 items-center">
          <img
            srcSet="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/17/5b/9c/caption.jpg?w=600&amp;h=-1&amp;s=1 1x,https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/17/5b/9c/caption.jpg?w=1200&amp;h=-1&amp;s=1 2x"
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/17/5b/9c/caption.jpg?w=600&amp;h=-1&amp;s=1"
            width="600"
            height="450"
            role="none"
            alt=""
            loading="lazy"
            className="rounded-xl"
          />
          <div className="flex flex-col gap-4 items-center text-center">
            <h2 className="text-3xl">It’s easier than ever to go together</h2>
            <p className="">
              Travel is better when you can share it with your best friend. Find
              all the tips, guides, and tools you need to take a dream trip with
              your dog.
            </p>
            <div className="H0 xUqsL">
              <div className="ejjmj">
                <a
                  className="rmyCe _G B- z _S c Wc wSSLS AeLHi sOtnj"
                  target="_blank"
                  rel="sponsored"
                  href="/Articles-l2cB2pP2AiZc-Pet_friendly_travel.html"
                >
                  <span className="px-4 py-2 text-white bg-black rounded-full">
                    Explore more
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <h3 className="text-3xl font-bold">Home Rentals Near You</h3>
        <p>We think you'd enjoy these homes for a quick trip out of town.</p>
      </Container>
    </Layout>
  )
}

export default HomePage
