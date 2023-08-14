# Add Panda CSS to your project

https://panda-css.com/

## Installation

yarn add -D @pandacss/dev
yarn panda init --postcss

## Create Script

"prepare": "panda codegen",

## Add variables: go to src/app/global.css

@layer reset, base, tokens, recipes, utilities;

## Troubleshooting

change the script: "dev": "rm -rf .next && next dev",
