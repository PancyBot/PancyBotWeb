{ pkgs }: {
    deps = [
        pkgs.yarn
        pkgs.cowsay
		pkgs.nodejs-16_x
		pkgs.nodePackages.typescript-language-server
		pkgs.nodePackages.node-pre-gyp
		pkgs.libpng
		pkgs.libjpeg
		pkgs.libuuid
    ];
}