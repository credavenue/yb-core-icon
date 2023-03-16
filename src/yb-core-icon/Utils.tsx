import React from 'react'

export const err = console.error.bind(console);

export async function fetchText(uri: string) {
    const response = await fetch(uri);
    if (response.ok) {
        return await response.text();
    }
    throw new Error(`Fetching ${uri} failed with status ${response.status}`);
}

export function rawSVGColorModify(svgString: string, color: string | undefined): string {
    const svgOpenTagRegex = /<svg[^>]*>/i;
    const pathOpenTagRegex = /<path[^>]*>/i;

    if (color === undefined) {
        return svgString
    }

    let hasStroke = false;

    if (svgString.includes("stroke=")) {
        hasStroke = true;
    }

    // Modify fill property for <svg> tag
    svgString = svgString.replace(svgOpenTagRegex, (match) => {
        if (hasStroke) {
            return match
        }
        if (match.includes('fill=')) {
            return match.replace(/fill="([^"]*)"/i, `fill="${color}"`);
        } else {
            return match.replace('>', ` fill="${color}">`);
        }
    });

    // Modify fill property for <path> tags
    svgString = svgString.replace(pathOpenTagRegex, (match) => {
        if (hasStroke) {
            return match.replace(/stroke="([^"]*)"/i, `stroke="${color}"`);
        }
        if (match.includes('fill=')) {
            return match.replace(/fill="([^"]*)"/i, `fill="${color}"`);
        } else {
            return match
        }
    });

    return svgString;
}

export function domSVGColorModify(svgString: string, color: string | undefined): string {
    if (color === undefined) {
        return svgString
    }
    const parser = new DOMParser();
    const doc = parser.parseFromString(svgString, "image/svg+xml");

    const svg = doc.getElementsByTagName("svg")[0];
    const path = doc.getElementsByTagName("path")[0];

    let hasStroke = false

    if (path.hasAttribute("stroke")) {
        hasStroke = true
    }

    if (!hasStroke) {
        if (svg.getAttribute("fill")) {
            svg.setAttribute("fill", color);
        }
    }

    if (hasStroke) {
        if (path.getAttribute("stroke")) {
            path.setAttribute("stroke", color);
        }
    } else {
        if (path.getAttribute("fill")) {
            path.setAttribute("fill", color);
        }
    }

    return new XMLSerializer().serializeToString(doc);
}