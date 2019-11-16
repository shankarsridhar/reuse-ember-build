# READ ME

`master` branch has pollyjs included and has the problem happening.
`resuse-build-working-no-pollyjs` branch has the reuse build working after removing the @pollyjs/ember addon.

## Instructions to see the problem:

- git clone <this-repo-url>
- git checkout master
- yarn install
- ember build
- ember t --path dist

## Instructions to see the problem go away after removing the @pollyjs/embeer:

- git checkout resuse-build-working-no-pollyjs
- rm -rf dist tmp
- yarn install
- ember build
- ember t --path dist
