import "@assets/css/global.css";
import "react-toastify/dist/ReactToastify.css";

import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import axios from "axios";

import App from "./App";
import {persistor, store} from "./store";
import {setupInterceptorsTo} from "@config/configAxios";
import {ToastContainer, Zoom} from "react-toastify";

import rtlPlugin from 'stylis-plugin-rtl';
import {CacheProvider} from '@emotion/react';
import createCache from '@emotion/cache';
import {prefixer} from 'stylis';

import {BrowserRouter} from "react-router-dom";

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';


const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: false,
        },
    },
});

setupInterceptorsTo(axios);
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <CacheProvider value={cacheRtl}>
                        <ToastContainer
                            position="top-right"
                            transition={Zoom}
                            autoClose={5000}
                            draggable={false}
                            rtl
                            newestOnTop
                            closeOnClick
                            pauseOnFocusLoss
                        />
                        <QueryClientProvider client={queryClient}>
                            {import.meta.env.VITE_NODE_ENV === 'development' && (
                                <ReactQueryDevtools initialIsOpen={false}/>)}
                            <BrowserRouter>
                                <App/>
                            </BrowserRouter>
                        </QueryClientProvider>
                </CacheProvider>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
)
