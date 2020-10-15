export const models = [
  {
    name: 'RadRover',
    img: 'https://cdn.shopify.com/s/files/1/0799/9645/products/RadRover_Right_Side_View_Web_48240052-768b-4887-bfcb-ca6f223c1ceb_large.jpg?v=1578074509',
    code: 'R',
  },
  {
    name: 'RadMini',
    img: 'https://cdn.shopify.com/s/files/1/0799/9645/products/RadMini4_Right_View_V2_large.jpg?v=1597785280',
    code: 'M',
  },
  {
    name: 'RadWagon',
    img: 'https://cdn.shopify.com/s/files/1/0799/9645/products/RadWagon4O_1_large.jpg?v=1599244890',
    code: 'W',
  },
  {
    name: 'RadCity 16',
    img: 'https://cdn.shopify.com/s/files/1/0799/9645/products/RadCity_Right_View_large.jpg?v=1595980489',
    code: '6',
  },
  {
    name: 'RadCity 19',
    img: 'https://cdn.shopify.com/s/files/1/0799/9645/products/RadCity_Right_View_large.jpg?v=1595980489',
    code: '9',
  },
  {
    name: 'RadCity Stepthru',
    img: 'https://cdn.shopify.com/s/files/1/0799/9645/products/RadCity_ST_Black_Right_Side_View_Web_large.jpg?v=1600458751',
    code: 'S',
  },
  {
    name: 'RadBurro',
    img: 'https://cdn.shopify.com/s/files/1/0799/9645/products/RadMini4_Right_View_V2_large.jpg?v=1597785280',
    code: 'B',
  },
  {
    name: 'RadRhino',
    img: 'https://cdn.shopify.com/s/files/1/0799/9645/products/RadRunner_Plus_RIght_View_Transparent.png?v=1585240356',
    code: 'H',
  },
  {
    name: 'Large Cargo Box',
    img: 'https://cdn.shopify.com/s/files/1/0799/9645/products/RadMini4_Right_View_V2_large.jpg?v=1597785280',
    code: 'C',
  },
  {
    name: 'Small Cargo Box',
    img: 'https://cdn.shopify.com/s/files/1/0799/9645/products/RadMini4_Right_View_V2_large.jpg?v=1597785280',
    code: 'K',
  },
  {
    name: 'Pedicab',
    img: 'https://cdn.shopify.com/s/files/1/0799/9645/products/RadMini4_Right_View_V2_large.jpg?v=1597785280',
    code: 'P',
  },
  {
    name: 'Flatbed',
    img: 'https://cdn.shopify.com/s/files/1/0799/9645/products/RadMini4_Right_View_V2_large.jpg?v=1597785280',
    code: 'F',
  },
  {
    name: 'Truckbed',
    img: 'https://cdn.shopify.com/s/files/1/0799/9645/products/RadMini4_Right_View_V2_large.jpg?v=1597785280',
    code: 'T',
  },
  {
    name: 'Insulated Cargo Box',
    img: 'https://cdn.shopify.com/s/files/1/0799/9645/products/RadMini4_Right_View_V2_large.jpg?v=1597785280',
    code: 'N',
  },
  {
    name: 'Runner',
    img: 'https://cdn.shopify.com/s/files/1/0799/9645/products/RadRunner_Green_Right_Side_View_Web_large.jpg?v=1599244904',
    code: 'Y',
  },
];

const modelYears = {
  '2018': 'A',
  '2019': 'B',
  '2020': 'C',
  '2021': 'D',
};

export function validationError(form) {
  let allFields = true;

  Object.keys(form).forEach(key => {
    if (!form[key]) allFields = false;
  });

  return !allFields;
}

export function generateHash(form) {
  const bikeDetails = form.model + modelYears[form.modelYear];
  const unique = generateUnique();

  return bikeDetails + form.manMonth + form.manYear + form.assembly + form.version + unique;
};

function generateUnique() {
  let digits = [];

  while (digits.length < 6) {
    const rand = Math.floor(Math.random() * 6);
    digits.push(rand);
  };

  return digits.join('');
}