"use strict";

import gulp from "gulp";
const smartgrid = require("smart-grid");

gulp.task("smart-grid", (cb) => {
    smartgrid("./src/styles/vendor/import/", {
        outputStyle: "scss",
        filename: "_smart-grid",
        columns: 12, // number of grid columns
        offset: "0px", // gutter width - 30px
        mobileFirst: false,
        mixinNames: {
            container: "container"
        },
        container: {
            fields: "15px" // side fields - 15px
        },
        breakPoints: {
            xs: {
                offset: "15px",
                width: "320px"
            },
            sm: {
                width: "540px",
            },
            md: {
                width: "768px"
            },
            lg: {
                width: "1024px"
            },
            xl: {
                width: "1230px"
            }
        }
    });
    cb();
});
