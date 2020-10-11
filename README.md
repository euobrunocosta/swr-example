# React App with SWR

This is a simple React app created to serve as an example on how to use the [SWR](https://swr.vercel.app/) library.

## SWR

SWR is a React Hook library for remote data fetching, maintained by [Vercel](https://vercel.com).

SWR stands for "stale-while-revalidating", which means that SWR will first attempt to load data from cache (stale), and then, in the background, fetch new data (revalidate).

SWR hook `useSWR` was used inside the custom hook `useFetch` which was used in the list and details pages.

To start the react app run:

```shell
yarn start
```

## With and without SWR

If you want, you can checkout the commit with the message "without swr" to see the behavior of the app without SWR library.

## API

The [`json-server`](https://www.npmjs.com/package/json-server) library was used mock the rest api.

The data used in this project is stored in the `api.json` file and was adapted from [http://dummy.restapiexample.com/](http://dummy.restapiexample.com/)

To start the API server run:

```shell
yarn api
```
