import PrimaryButton from '~/components/ui/Button';
import DraggableImage from '~/components/ui/DraggableImage';

const images = [
  {rotate: '-8deg', src: '/menu-images/gvl/summer-26/blackberry-earl-gray.png'},
  {rotate: '12deg', src: '/menu-images/seneca/summer-26/french-onion-scone.png'},
  {rotate: '-5deg', src: '/menu-images/shared/summer-26/blueberry-poptart.png'},
  {rotate: '7deg', src: '/menu-images/gvl/summer-26/blueberry-lemon-danish.png'},
  {rotate: '-12deg', src: '/menu-images/seneca/summer-26/earl-gray-lemon.png'},
  {rotate: '9deg', src: '/menu-images/shared/summer-26/guava-pastelito.png'},
  {rotate: '-6deg', src: '/menu-images/gvl/summer-26/lemon-scone.png'},
  {rotate: '-10deg', src: '/menu-images/seneca/summer-26/gf-pb-choc-sandwich-cookie.png'},
  {rotate: '5deg', src: '/menu-images/shared/summer-26/orange-cinnamon-roll.png'},
  {rotate: '11deg', src: '/menu-images/gvl/summer-26/matcha-cookie.png'},
  {rotate: '-4deg', src: '/menu-images/seneca/summer-26/jalapeno-cheddar-scone.png'},
  {rotate: '8deg', src: '/menu-images/shared/summer-26/tomato-pie.png'},
  {rotate: '-13deg', src: '/menu-images/gvl/summer-26/pesto-mozz-puff-pastry.png'},
  {rotate: '6deg', src: '/menu-images/seneca/summer-26/oatmeal-raisin-cookie.png'},
  {rotate: '-9deg', src: '/menu-images/gvl/summer-26/spinach-feta.png'},
  {rotate: '13deg', src: '/menu-images/seneca/summer-26/strawberry-white-choc-scone.png'},
  {rotate: '-3deg', src: '/menu-images/gvl/summer-26/tomato-basil.png'},
  {rotate: '10deg', src: '/menu-images/shared/summer-26/blueberry-poptart.png'},
  {rotate: '-11deg', src: '/menu-images/gvl/summer-26/blackberry-earl-gray.png'},
  {rotate: '5deg', src: '/menu-images/seneca/summer-26/french-onion-scone.png'},
  {rotate: '11deg', src: '/menu-images/shared/summer-26/guava-pastelito.png'},
  {rotate: '-4deg', src: '/menu-images/gvl/summer-26/blueberry-lemon-danish.png'},
  {rotate: '-8deg', src: '/menu-images/seneca/summer-26/earl-gray-lemon.png'},
  {rotate: '12deg', src: '/menu-images/gvl/summer-26/lemon-scone.png'},
];

function CollageImage({src, rotate}: {src: string; rotate: string}) {
  return (
    <DraggableImage>
      <img
        src={src}
        alt=""
        className="w-full aspect-square object-contain drop-shadow-md hover:rotate-45 transition-all duration-300"
        style={{transform: `rotate(${rotate})`}}
      />
    </DraggableImage>
  );
}

function TextBlock() {
  return (
    <div className="flex flex-col gap-5 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-black leading-snug">
        Looking for something more permanent?
      </h2>
      <p className="text-base text-black">
        Love the Daydrinkers vibe? Take it home. Browse our full collection of
        apparel and goods made for people who like to keep it easy.
      </p>
      <PrimaryButton text="Shop Now" link="/collections" />
    </div>
  );
}

export default function MenuCollageSection() {
  return (
    <section className="bg-[#f0f2ea] py-16 md:py-24 px-6 md:px-16">
      <div className="max-w-screen-xl mx-auto">
        {/* Mobile: 4 images → text → 4 images */}
        <div className="md:hidden grid grid-cols-2 gap-x-8 gap-y-10 items-center">
          {images.slice(0, 4).map((img, i) => (
            <CollageImage key={i} src={img.src} rotate={img.rotate} />
          ))}
          <div className="col-span-2 py-4">
            <TextBlock />
          </div>
          {images.slice(4, 8).map((img, i) => (
            <CollageImage key={i + 4} src={img.src} rotate={img.rotate} />
          ))}
        </div>

        {/* Desktop: original 5-column collage layout */}
        <div className="hidden md:grid md:grid-cols-5 gap-x-8 gap-y-16 items-center">
          {images.slice(0, 5).map((img, i) => (
            <CollageImage key={i} src={img.src} rotate={img.rotate} />
          ))}
          <CollageImage src={images[5].src} rotate={images[5].rotate} />
          <div className="col-span-3 row-span-2 flex flex-col gap-5 px-8">
            <TextBlock />
          </div>
          <CollageImage src={images[6].src} rotate={images[6].rotate} />
          <CollageImage src={images[7].src} rotate={images[7].rotate} />
          <CollageImage src={images[8].src} rotate={images[8].rotate} />
          {images.slice(9).map((img, i) => (
            <CollageImage key={i + 9} src={img.src} rotate={img.rotate} />
          ))}
        </div>
      </div>
    </section>
  );
}
