import { html, nothing } from 'lit';
import { Template } from './types'

export function getSuctionIcon(name: string, size: number, color: string): Template {
    const icons : Record<string, Template> = {
        'quiet': html`<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="${size}" height="${size}" viewBox="0 0 11.112 11.112"><path fill="none" stroke="${color}" stroke-width=".529" d="M5.795.8a4.736 4.736 0 1 0 0 9.472 4.736 4.736 0 0 0 4.352-2.874A4.2 4.2 0 0 1 5.61 3.212a4.2 4.2 0 0 1 .742-2.38C6.16.81 5.961.806 5.795.8z"/></svg>`,
        'balanced': html`<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="${size}" height="${size}" viewBox="0 0 11.112 11.113"><path d="M55.986 146.233c1.059-.033 3.044.908 3.017 2.947-.024 1.88-1.601 3.05-2.858 3.1" style="fill:none;fill-opacity:1;stroke:${color};stroke-width:.529167;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:2.5;stroke-dasharray:none;stroke-opacity:1" transform="translate(-49.835 -142.332)"/><path d="M56.6 148.146c-.501.933-2.309 2.181-4.061 1.139-1.616-.961-1.842-2.913-1.256-4.026" style="fill:none;fill-opacity:1;stroke:${color};stroke-width:.529167;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:2.5;stroke-dasharray:none;stroke-opacity:1" transform="translate(-49.835 -142.332)"/><path d="M54.637 147.601c-.558-.9-.736-3.09 1.043-4.086 1.64-.918 3.443-.138 4.115.925" style="fill:none;fill-opacity:1;stroke:${color};stroke-width:.529167;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:2.5;stroke-dasharray:none;stroke-opacity:1" transform="translate(-49.835 -142.332)"/></svg>`,
        'turbo': html`<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="${size}" height="${size}" viewBox="0 0 11.112 11.113"><path d="M104.403 145.24c.567-.459 1.067-.907 2.232-.951 1.249-.075 3.1.66 3.027 2.745M107.79 147.041c.459.567.907 1.068.951 2.233.075 1.248-.66 3.1-2.745 3.026M105.768 150.438c-.567.458-1.067.906-2.232.95-1.249.075-3.1-.66-3.026-2.744M102.421 148.614c-.458-.567-.906-1.067-.95-2.232-.075-1.249.66-3.1 2.744-3.026" style="fill:none;fill-opacity:1;stroke:${color};stroke-width:.529167;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:2.5;stroke-dasharray:none;stroke-opacity:1" transform="translate(-99.576 -142.332)"/></svg>`,
        'max': html`<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="${size}" height="${size}" viewBox="0 0 11.112 11.113"><path d="M153.113 145.3s.695-2.03 2.828-2.125c.876-.039 1.43.29 1.43.29M156.884 144.916s2.14.147 2.784 2.182c.265.836.09 1.456.09 1.456M158.276 148.682s.413 2.106-1.386 3.254c-.74.472-1.384.464-1.384.464M154.977 151.075s-1.927.944-3.502-.497c-.647-.592-.807-1.216-.807-1.216M152.18 148.833s-1.615-1.412-.896-3.422c.295-.825.809-1.214.809-1.214" style="fill:none;fill-opacity:1;stroke:${color};stroke-width:.529167;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:2.5;stroke-dasharray:none;stroke-opacity:1" transform="translate(-149.743 -142.332)"/></svg>`,
        'max_plus': html`<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="${size}" height="${size}" viewBox="0 0 11.112 11.113"><g transform="translate(-199.626 -142.332)"><path d="M202.912 151.038c.006.58.989 1.032 2.208 1.032 1.22 0 2.208-.44 2.208-1.032M201.616 148.172a.615.615 0 0 0-.104.328c0 .769 1.615 1.392 3.608 1.392s3.608-.623 3.608-1.392a.62.62 0 0 0-.102-.328" style="fill:none;fill-opacity:1;stroke:${color};stroke-width:.529167;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:2.5;stroke-dasharray:none;stroke-opacity:1"/><ellipse cx="205.12" cy="145.325" rx="4.701" ry="1.9" style="fill:none;fill-opacity:1;stroke:${color};stroke-width:.529167;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:2.5;stroke-dasharray:none;stroke-opacity:1"/><path d="M204.964 144.828c1.462-.03 3.075.222 3.087 1.029.01.655-.735 1.052-1.308 1.25" style="fill:none;fill-opacity:1;stroke:${color};stroke-width:.529167;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:2.5;stroke-dasharray:none;stroke-opacity:1"/></g></svg>`,
    };

    if (!icons[name])
        return nothing;

    return icons[name];
}

export function getMoppingIcon(name: string, size: number, color: string): Template {
    const icons: Record<string, Template> = {
        'low': html`<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="${size}" height="${size}" viewBox="0 0 11.113 11.113"><path d="M-110.765 136.054a3.324 3.324 0 0 1-6.647 0c0-1.835 1.704-3.847 3.323-4.712 1.659.786 3.324 2.877 3.324 4.712z" style="fill:none;stroke:${color};stroke-width:.529167;stroke-linecap:round;stroke-miterlimit:2.5" transform="translate(119.628 -130.73)"/><path d="M-117.329 136.799s.713.779 1.977.779c1.263 0 2.342-.817 2.679-.893.074-.033 1.859-.06 1.859-.06v0M-119.023 134.819s-.152.953-.14 1.659c.012.744.163 1.405.373 1.919M-109.154 134.819s.152.953.14 1.659a5.365 5.365 0 0 1-.374 1.919" style="fill:none;stroke:${color};stroke-width:.529167;stroke-linecap:round;stroke-miterlimit:2.5" transform="translate(119.628 -130.73)"/></svg>`,
        'medium': html`<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="${size}" height="${size}" viewBox="0 0 11.113 11.113"><path d="M-137.966 136.055a3.324 3.324 0 0 1-6.647 0c0-1.836 1.705-3.847 3.323-4.713 1.659.787 3.324 2.877 3.324 4.713z" style="fill:none;stroke:${color};stroke-width:.529167;stroke-linecap:round;stroke-miterlimit:2.5" transform="translate(146.896 -130.73)"/><path d="M-144.547 135.836s.713.78 1.976.78c1.264 0 2.343-.818 2.68-.894.074-.033 1.859-.059 1.859-.059v0M-146.294 134.813s-.152.954-.14 1.66c.012.743.164 1.404.374 1.918M-136.424 134.813s.152.954.14 1.66a5.365 5.365 0 0 1-.374 1.918M-143.17 140.934s.947.258 1.859.258 1.93-.363 1.93-.363" style="fill:none;stroke:${color};stroke-width:.529167;stroke-linecap:round;stroke-miterlimit:2.5" transform="translate(146.896 -130.73)"/></svg>`,
        'high': html`<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="${size}" height="${size}" viewBox="0 0 11.113 11.113"><path d="M55.792 136.055a3.324 3.324 0 0 1-6.648 0c0-1.836 1.705-3.847 3.324-4.713 1.659.787 3.324 2.877 3.324 4.713z" style="fill:none;stroke:${color};stroke-width:.529167;stroke-linecap:round;stroke-miterlimit:2.5" transform="translate(-46.818 -130.73)"/><path d="M49.641 134.22s.349.56 1.612.56c1.264 0 2.342-.818 2.68-.893.074-.033 1.165-.06 1.165-.06M48.117 132.983c-.468.854-.69 1.52-.819 2.432M47.415 137.602c.234 1.356 1.079 2.163 1.465 2.584" style="fill:none;stroke:${color};stroke-width:.529167;stroke-linecap:round;stroke-miterlimit:2.5" transform="translate(-46.818 -130.73)"/><path d="M48.117 132.983c-.468.854-.69 1.52-.819 2.432M47.415 137.602c.234 1.356 1.079 2.163 1.465 2.584" style="fill:none;stroke:${color};stroke-width:.529167;stroke-linecap:round;stroke-miterlimit:2.5" transform="matrix(-1 0 0 1 57.873 -130.73)"/></svg>`,
    };

    if (!icons[name])
        return nothing;

    return icons[name];
}

export function getRouteIcon(name: string, size: number, color: string): Template {
    const icons: Record<string, Template> = {
        'fast': html`<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="${size}" height="${size}" viewBox="0 0 11.113 11.113"><g transform="translate(-6.01 -117.589)"><rect width="8.996" height="9.525" x="7.069" y="118.383" ry="1.587" style="fill:none;stroke:${color};stroke-width:.529167;stroke-linecap:round;stroke-miterlimit:2.5"/><path d="M13.495 126.219v-1.637c0-.425-.651-1.417-1.929-1.427v0c-1.278-.01-1.93-1.001-1.93-1.426v-1.637" style="fill:none;stroke:${color};stroke-width:.529167;stroke-linecap:round;stroke-miterlimit:2.5"/></g></svg>`,
        'standard': html`<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="${size}" height="${size}" viewBox="0 0 11.113 11.113"><g transform="translate(-68.49 -117.589)"><rect width="8.996" height="9.525" x="69.548" y="118.383" ry="1.587" style="fill:none;stroke:${color};stroke-width:.529167;stroke-linecap:round;stroke-miterlimit:2.5"/><path d="M76.375 125.905v-4.437c0-.687-.52-1.24-1.165-1.24-.646 0-1.166.553-1.166 1.24v3.373c0 .687-.52 1.24-1.166 1.24-.646 0-1.166-.553-1.166-1.24v-4.437" style="fill:none;stroke:${color};stroke-width:.529167;stroke-linecap:round;stroke-miterlimit:2.5"/></g></svg>`,
        'deep': html`<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="${size}" height="${size}" viewBox="0 0 11.113 11.113"><g transform="translate(-130.888 -117.589)"><rect width="8.996" height="9.525" x="131.946" y="118.383" ry="1.587" style="fill:none;stroke:${color};stroke-width:.529167;stroke-linecap:round;stroke-miterlimit:2.5"/><path d="M133.972 125.852v-4.641c0-.581.369-1.05.827-1.05.459 0 .828.469.828 1.05v3.883c0 .581.402 1.05.86 1.05.459 0 .861-.469.861-1.05v-3.841c0-.582.37-1.05.828-1.05.458 0 .827.468.827 1.05v4.641" style="fill:none;stroke:${color};stroke-width:.529167;stroke-linecap:round;stroke-miterlimit:2.5"/></g></svg>`,
        'deep_plus': html`<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="${size}" height="${size}" viewBox="0 0 11.113 11.113"><g transform="translate(-9.236 -117.598)"><rect width="8.996" height="9.525" x="10.294" y="118.392" ry="1.587" style="fill:none;stroke:${color};stroke-width:.529167;stroke-linecap:round;stroke-miterlimit:2.5"/><path d="M12.034 120.389V125.39c0 .421.3.76.673.76.372 0 .673-.339.673-.76V120.918c0-.421.322-.76.722-.76.4 0 .722.339.722.76V125.39c0 .421.3.76.673.76.372 0 .672-.339.672-.76V120.918c0-.421.3-.76.673-.76.373 0 .673.339.673.76V125.92" style="fill:none;stroke:${color};stroke-width:.529167;stroke-linecap:round;stroke-miterlimit:2.5"/></g></svg>`,
    };

    if (!icons[name])
        return nothing;

    return icons[name];
}

export function getCycleIcon(name: string, size: number, color: string): Template {
    const icons: Record<string, Template> = {
        '1': html`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 42 42"><path fill="${color}" stroke-linecap="round" stroke-miterlimit="2.5" stroke-width=".01" d="M26.869 7.185a.981.981 0 0 0-.592.176l-5.344 3.55c-.34.193-.511.46-.511.801 0 .256.095.49.287.703.213.214.447.32.703.32a.893.893 0 0 0 .545-.19L25.86 9.93v18.71c0 .255.095.479.287.671s.438.287.737.287.544-.095.736-.287.287-.416.287-.672V8.16a.932.932 0 0 0-.223-.639c-.149-.192-.363-.299-.64-.32a.898.898 0 0 0-.176-.016zm-10.285 5.848a.96.96 0 0 0-.705.287l-4.18 4.152-3.947-4.056a.914.914 0 0 0-.705-.32.788.788 0 0 0-.608.288.87.87 0 0 0-.255.64c0 .236.085.46.255.673l3.96 4.068-4.215 4.188c-.192.192-.287.416-.287.672s.095.48.287.671c.192.192.406.288.64.288.256 0 .49-.107.703-.32l4.188-4.147 4.068 4.18c.235.191.459.287.672.287.192 0 .396-.074.61-.223.213-.15.32-.385.32-.705 0-.256-.107-.48-.32-.672l-4.045-4.156 4.205-4.164c.192-.235.287-.469.287-.704 0-.234-.095-.448-.287-.64a.821.821 0 0 0-.64-.287z" aria-label="×1" style="shape-inside:url(#rect1578);white-space:pre" transform="translate(.992 2.608)"/></svg>`,
        '2': html`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 42 42"><g style="shape-inside:url(#rect1578);white-space:pre"><path fill="${color}" stroke-linecap="round" stroke-miterlimit="2.5" stroke-width=".01" d="M27.272 7.033c-.81 0-1.643.17-2.496.511a8.308 8.308 0 0 0-2.272 1.313c-.682.554-1.215 1.16-1.6 1.822a4.47 4.47 0 0 0-.35.514c-.065.15-.098.298-.098.447 0 .235.097.437.289.607.192.15.416.225.672.225.17 0 .319-.043.447-.129.15-.085.288-.234.416-.447a5.01 5.01 0 0 1 1.152-1.535 6.58 6.58 0 0 1 1.729-1.088 5.097 5.097 0 0 1 1.984-.416c1.45 0 2.602.426 3.455 1.28.853.852 1.28 1.984 1.28 3.392 0 .853-.298 1.824-.895 2.912-.576 1.066-1.452 2.24-2.625 3.52l-7.39 8.16c-.171.213-.259.437-.259.671 0 .32.098.566.29.737.213.149.459.222.736.222h12a.865.865 0 0 0 .639-.255.857.857 0 0 0 .289-.672.82.82 0 0 0-.29-.639.82.82 0 0 0-.638-.29h-9.834l5.898-6.622c1.366-1.515 2.388-2.923 3.07-4.225.705-1.322 1.057-2.539 1.057-3.648 0-1.301-.277-2.42-.832-3.36a5.362 5.362 0 0 0-2.305-2.209c-.98-.533-2.154-.798-3.52-.798zm-10.688 6a.96.96 0 0 0-.705.287l-4.18 4.152-3.947-4.057a.914.914 0 0 0-.705-.32.788.788 0 0 0-.608.29.87.87 0 0 0-.255.64c0 .234.085.458.255.672l3.96 4.068-4.215 4.188c-.192.192-.287.415-.287.671s.095.48.287.672c.192.192.406.287.64.287.256 0 .49-.107.703-.32l4.188-4.146 4.068 4.18c.235.191.459.286.672.286.192 0 .396-.073.61-.222.213-.15.32-.385.32-.705 0-.256-.107-.48-.32-.672l-4.045-4.156 4.205-4.164c.192-.235.287-.469.287-.704 0-.234-.095-.448-.287-.64a.821.821 0 0 0-.64-.287z" style="white-space:pre" transform="translate(.992 2.608)"/></g></svg>`,
        '3': html`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 42 42"><g style="shape-inside:url(#rect1578);white-space:pre"><path fill="${color}" stroke-linecap="round" stroke-miterlimit="2.5" stroke-width=".01" d="M6.824 24.584c-.235 0-.448-.096-.64-.288s-.288-.416-.288-.672.096-.48.288-.672l9.696-9.632a.958.958 0 0 1 .704-.288.82.82 0 0 1 .64.288c.192.192.288.405.288.64s-.096.47-.288.704l-9.696 9.6c-.213.213-.448.32-.704.32zm8.96-.288-9.344-9.6a1.061 1.061 0 0 1-.256-.672c0-.256.085-.47.256-.64a.788.788 0 0 1 .608-.288c.277 0 .512.107.704.32l9.312 9.568c.213.192.32.416.32.672 0 .32-.107.555-.32.704s-.416.224-.608.224c-.213 0-.437-.096-.672-.288zm6.024 1.76c.107 0 .213.021.32.064.128.043.277.139.448.288.448.47.981.832 1.6 1.088.619.235 1.323.352 2.112.352 1.045 0 1.995-.235 2.848-.704a5.387 5.387 0 0 0 2.08-1.952c.512-.853.768-1.824.768-2.912 0-1.237-.277-2.23-.832-2.976a4.747 4.747 0 0 0-2.08-1.696 6.048 6.048 0 0 0-2.56-.576c-.235 0-.47.021-.704.064-.213.021-.416.053-.608.096s-.341.064-.448.064c-.277 0-.49-.085-.64-.256a1.112 1.112 0 0 1-.224-.704c0-.15.032-.277.096-.384.064-.128.15-.267.256-.416l6.496-7.072.384.512h-9.696a.98.98 0 0 1-.672-.256c-.17-.192-.256-.416-.256-.672s.085-.47.256-.64a.98.98 0 0 1 .672-.256h10.752c.363 0 .619.117.768.352.15.213.224.427.224.64a.852.852 0 0 1-.096.384c-.064.107-.15.224-.256.352l-6.496 7.072-.704-.416c.064-.064.277-.128.64-.192.384-.085.683-.128.896-.128 1.173 0 2.272.277 3.296.832a6.498 6.498 0 0 1 2.528 2.4c.661 1.024.992 2.293.992 3.808 0 1.493-.352 2.805-1.056 3.936a7.262 7.262 0 0 1-2.848 2.592c-1.195.619-2.517.928-3.968.928-.875 0-1.739-.15-2.592-.448a6.285 6.285 0 0 1-2.24-1.344c-.15-.128-.256-.256-.32-.384s-.096-.256-.096-.384c0-.256.085-.49.256-.704.192-.235.427-.352.704-.352z" style="white-space:pre" transform="translate(.992 2.608)"/></g></svg>`,
    };

    if (!icons[name])
        return nothing;

    return icons[name];
}
