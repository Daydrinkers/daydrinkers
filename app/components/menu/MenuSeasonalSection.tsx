import type {Location} from './LocationToggle';
import ScallopBorder from '~/components/ui/ScallopBorder';
import {MenuItemCard} from './shared';

type SeasonalMenuItem = {
  name: string;
  price: string;
  image: string;
  tag?: string;
};

// Shared fall seasonal items — offered at both Greenville and Seneca.
const sharedItems: SeasonalMenuItem[] = [
  {
    name: 'Apple turnover',
    price: '$3.15',
    image: '/menu-images/shared/fall-26/apple-turnover.png',
  },
];

const seasonalItems: Record<Location, SeasonalMenuItem[]> = {
  greenville: [
    ...sharedItems,
    {
      name: 'Banana streusel muffin GF',
      price: '$3.15',
      image: '/menu-images/gvl/fall-26/banana-streusel-muffin-gf.png',
    },
    {
      name: 'Brie cranberry apple tart',
      price: '$3.15',
      image: '/menu-images/gvl/fall-26/brie-cranberry-apple-tart.png',
    },
    {
      name: 'Chocolate pistachio twist',
      price: '$3.15',
      image: '/menu-images/gvl/fall-26/chocolate-pistachio-twist.png',
    },
    {
      name: 'Monkey bread bites',
      price: '$3.15',
      image: '/menu-images/gvl/fall-26/monkey-bread-bites.png',
    },
    {
      name: 'Pancetta gouda scone',
      price: '$3.15',
      image: '/menu-images/gvl/fall-26/pancetta-gouda-scone.png',
    },
  ],
  seneca: [
    ...sharedItems,
    {
      name: 'Bacon gouda scone',
      price: '$3.15',
      image: '/menu-images/seneca/fall-26/bacon-gouda-scone.png',
    },
    {
      name: 'Brown sugar cinnamon poptart',
      price: '$3.15',
      image: '/menu-images/seneca/fall-26/brown-sugar-cinnamon-poptart.png',
    },
    {
      name: 'Oatmeal creampie',
      price: '$3.15',
      image: '/menu-images/seneca/fall-26/oatmeal-creampie.png',
    },
  ],
};

export default function MenuSeasonalSection({location}: {location: Location}) {
  const items = seasonalItems[location];

  return (
    <>
      <div className="bg-[#f0f2ea] rotate-180">
        <ScallopBorder color="#e4ceb4" />
      </div>

      <div className="bg-[#e4ceb4] rounded-b-[32px] ">
        <section className="px-6 md:px-16 max-w-screen-xl mx-auto py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-black">
              Seasonal Selections
            </h2>
            {/* <p className="text-base text-black mt-2">
              Lorem ipsum dolor sit amet.
            </p> */}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {items.map((item, i) => (
              <MenuItemCard
                key={i}
                name={item.name}
                price={item.price}
                image={item.image}
                tag={item.tag}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
