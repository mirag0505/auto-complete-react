# React + TypeScript + Vite (auto-complete-component)

Link: gitpages
<https://mirag0505.github.io/auto-complete-react/>

##Installation and use dev server

```
pnpm install
pnpm dev
```
## Run test

```
pnpm test
```

## Run build

```
pnpm ci
```

The App consists:

components:
  Select
  Options
  Input
  Highlighted

hooks:
  useQuery

service:
  api methods

This project can be improved:
1. You can create a wrapper for the select and useQuery component, in our project, such a thing we called a container, where you plug in both silly components and components/hooks that have side effects;

2. To improve performance, you can wrap components in useCallback or useMemo, but in this case it is probably redundant, you need to compare execution speed. Since sometimes the cost of comparing props is more expensive than re-rendering a component;

3. You can add end-to-end tests;

4. In the Input component, I have a Time wrapper.

```
  const handleInputBlur = () => {
      setTimeout(() => {
        setOpened(false);
      }, 200);
    };
```
Otherwise, it's faster to trigger closing a component with options than usingState. It is better to rewrite this method using Portal or add an event delegation and track when clicks are not on this element.

5. Add a more sophisticated debaunce, put it in a separate hook.
6. Rewrite a component that accepts a collection of objects so that it does not depend on a specific type, but uses generics, and it requires a specific signature