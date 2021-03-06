export interface PackageDescription {
    name: string;
    hasTestingModule: boolean;
    bundle: boolean;
}

export interface Config {
    packages: PackageDescription[];
    scope: string;
}

export const packages: PackageDescription[] = [
    {
        name: 'vp-ngx-jsonapi',
        hasTestingModule: false,
        bundle: true,
    },
];
