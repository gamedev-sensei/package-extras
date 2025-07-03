# @gamedev-sensei/react-extras

Provides some useful ReactJs hooks:

* `useDerived` - works the same as the `useMemo` hook, but guarantees that the value will not be recomputed unless the dependencies change.
  You can specify a custom comparison function as the third parameter.
* `useMount` - works as the same as the `useEffect` hook, but you cannot specify the dependencies and the callback is run on component mount.

## Installation

Yarn:
```bash
yarn add @gamedev-sensei/react-extras
```

Npm:
```bash
npm i @gamedev-sensei/react-extras
```