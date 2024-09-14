let main = {
    variables: {
        turn: "w",
        selectedpiece: "",
        highlighted: [],
        pieces: {
            w_king: {
                position: "5_1",
                img: "&#9812;",
                captured: false,
                moved: false,
                type: "w_king",
            },
            w_queen: {
                position: "4_1",
                img: "&#9813;",
                captured: false,
                moved: false,
                type: "w_queen",
            },
            w_bishop1: {
                position: "3_1",
                img: "&#9815;",
                captured: false,
                moved: false,
                type: "w_bishop",
            },
            w_bishop2: {
                position: "6_1",
                img: "&#9815;",
                captured: false,
                moved: false,
                type: "w_bishop",
            },
            w_knight1: {
                position: "2_1",
                img: "&#9816;",
                captured: false,
                moved: false,
                type: "w_knight",
            },
            w_knight2: {
                position: "7_1",
                img: "&#9816;",
                captured: false,
                moved: false,
                type: "w_knight",
            },
            w_rook1: {
                position: "1_1",
                img: "&#9814;",
                captured: false,
                moved: false,
                type: "w_rook",
            },
            w_rook2: {
                position: "8_1",
                img: "&#9814;",
                captured: false,
                moved: false,
                type: "w_rook",
            },
            w_pawn1: {
                position: "1_2",
                img: "&#9817;",
                captured: false,
                type: "w_pawn",
                moved: false,
            },
            w_pawn2: {
                position: "2_2",
                img: "&#9817;",
                captured: false,
                type: "w_pawn",
                moved: false,
            },
            w_pawn3: {
                position: "3_2",
                img: "&#9817;",
                captured: false,
                type: "w_pawn",
                moved: false,
            },
            w_pawn4: {
                position: "4_2",
                img: "&#9817;",
                captured: false,
                type: "w_pawn",
                moved: false,
            },
            w_pawn5: {
                position: "5_2",
                img: "&#9817;",
                captured: false,
                type: "w_pawn",
                moved: false,
            },
            w_pawn6: {
                position: "6_2",
                img: "&#9817;",
                captured: false,
                type: "w_pawn",
                moved: false,
            },
            w_pawn7: {
                position: "7_2",
                img: "&#9817;",
                captured: false,
                type: "w_pawn",
                moved: false,
            },
            w_pawn8: {
                position: "8_2",
                img: "&#9817;",
                captured: false,
                type: "w_pawn",
                moved: false,
            },

            b_king: {
                position: "5_8",
                img: "&#9818;",
                captured: false,
                moved: false,
                type: "b_king",
            },
            b_queen: {
                position: "4_8",
                img: "&#9819;",
                captured: false,
                moved: false,
                type: "b_queen",
            },
            b_bishop1: {
                position: "3_8",
                img: "&#9821;",
                captured: false,
                moved: false,
                type: "b_bishop",
            },
            b_bishop2: {
                position: "6_8",
                img: "&#9821;",
                captured: false,
                moved: false,
                type: "b_bishop",
            },
            b_knight1: {
                position: "2_8",
                img: "&#9822;",
                captured: false,
                moved: false,
                type: "b_knight",
            },
            b_knight2: {
                position: "7_8",
                img: "&#9822;",
                captured: false,
                moved: false,
                type: "b_knight",
            },
            b_rook1: {
                position: "1_8",
                img: "&#9820;",
                captured: false,
                moved: false,
                type: "b_rook",
            },
            b_rook2: {
                position: "8_8",
                img: "&#9820;",
                captured: false,
                moved: false,
                type: "b_rook",
            },
            b_pawn1: {
                position: "1_7",
                img: "&#9823;",
                captured: false,
                type: "b_pawn",
                moved: false,
            },
            b_pawn2: {
                position: "2_7",
                img: "&#9823;",
                captured: false,
                type: "b_pawn",
                moved: false,
            },
            b_pawn3: {
                position: "3_7",
                img: "&#9823;",
                captured: false,
                type: "b_pawn",
                moved: false,
            },
            b_pawn4: {
                position: "4_7",
                img: "&#9823;",
                captured: false,
                type: "b_pawn",
                moved: false,
            },
            b_pawn5: {
                position: "5_7",
                img: "&#9823;",
                captured: false,
                type: "b_pawn",
                moved: false,
            },
            b_pawn6: {
                position: "6_7",
                img: "&#9823;",
                captured: false,
                type: "b_pawn",
                moved: false,
            },
            b_pawn7: {
                position: "7_7",
                img: "&#9823;",
                captured: false,
                type: "b_pawn",
                moved: false,
            },
            b_pawn8: {
                position: "8_7",
                img: "&#9823;",
                captured: false,
                type: "b_pawn",
                moved: false,
            },
        },
    },

    methods: {
        gamesetup: function () {
            $(".gamecell").attr("chess", "null");
            for (let gamepiece in main.variables.pieces) {
                $("#" + main.variables.pieces[gamepiece].position).html(
                    main.variables.pieces[gamepiece].img
                );
                $("#" + main.variables.pieces[gamepiece].position).attr(
                    "chess",
                    gamepiece
                );
            }
        },

        moveoptions: function (selectedpiece) {
            let position = { x: "", y: "" };
            position.x = main.variables.pieces[selectedpiece].position.split("_")[0];
            position.y = main.variables.pieces[selectedpiece].position.split("_")[1];

            var options = [];
            var coordinates = [];
            var startpoint = main.variables.pieces[selectedpiece].position;
            var c1, c2, c3, c4, c5, c6, c7, c8;

            if (main.variables.highlighted.length != 0) {
                main.methods.togglehighlight(main.variables.highlighted);
            }

            switch (main.variables.pieces[selectedpiece].type) {
                case "w_king":
                    if (
                        $("#6_1").attr("chess") == "null" &&
                        $("#7_1").attr("chess") == "null" &&
                        main.variables.pieces["w_king"].moved == false &&
                        main.variables.pieces["w_rook2"].moved == false
                    ) {
                        coordinates = [
                            { x: 1, y: 1 },
                            { x: 1, y: 0 },
                            { x: 1, y: -1 },
                            { x: 0, y: -1 },
                            { x: -1, y: -1 },
                            { x: -1, y: 0 },
                            { x: -1, y: 1 },
                            { x: 0, y: 1 },
                            { x: 2, y: 0 },
                        ].map(function (val) {
                            return (
                                parseInt(position.x) +
                                parseInt(val.x) +
                                "_" +
                                (parseInt(position.y) + parseInt(val.y))
                            );
                        });
                    } else {
                        coordinates = [
                            { x: 1, y: 1 },
                            { x: 1, y: 0 },
                            { x: 1, y: -1 },
                            { x: 0, y: -1 },
                            { x: -1, y: -1 },
                            { x: -1, y: 0 },
                            { x: -1, y: 1 },
                            { x: 0, y: 1 },
                        ].map(function (val) {
                            return (
                                parseInt(position.x) +
                                parseInt(val.x) +
                                "_" +
                                (parseInt(position.y) + parseInt(val.y))
                            );
                        });
                    }

                    options = main.methods
                        .options(
                            startpoint,
                            coordinates,
                            main.variables.pieces[selectedpiece].type
                        )
                        .slice(0);
                    main.variables.highlighted = options.slice(0);
                    main.methods.togglehighlight(options);
                    console.log(options);

                    break;
                case "b_king":
                    if (
                        $("#6_8").attr("chess") == "null" &&
                        $("#7_8").attr("chess") == "null" &&
                        main.variables.pieces["b_king"].moved == false &&
                        main.variables.pieces["b_rook2"].moved == false
                    ) {
                        coordinates = [
                            { x: 1, y: 1 },
                            { x: 1, y: 0 },
                            { x: 1, y: -1 },
                            { x: 0, y: -1 },
                            { x: -1, y: -1 },
                            { x: -1, y: 0 },
                            { x: -1, y: 1 },
                            { x: 0, y: 1 },
                            { x: 2, y: 0 },
                        ].map(function (val) {
                            return (
                                parseInt(position.x) +
                                parseInt(val.x) +
                                "_" +
                                (parseInt(position.y) + parseInt(val.y))
                            );
                        });
                    } else {
                        coordinates = [
                            { x: 1, y: 1 },
                            { x: 1, y: 0 },
                            { x: 1, y: -1 },
                            { x: 0, y: -1 },
                            { x: -1, y: -1 },
                            { x: -1, y: 0 },
                            { x: -1, y: 1 },
                            { x: 0, y: 1 },
                        ].map(function (val) {
                            return (
                                parseInt(position.x) +
                                parseInt(val.x) +
                                "_" +
                                (parseInt(position.y) + parseInt(val.y))
                            );
                        });
                    }
                    /*
                      coordinates = [{ x: 1, y: 1 },{ x: 1, y: 0 },{ x: 1, y: -1 },{ x: 0, y: -1 },{ x: -1, y: -1 },{ x: -1, y: 0 },{ x: -1, y: 1 },{ x: 0, y: 1 }].map(function(val){
                        return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                      });
                    */
                    options = main.methods
                        .options(
                            startpoint,
                            coordinates,
                            main.variables.pieces[selectedpiece].type
                        )
                        .slice(0);
                    main.variables.highlighted = options.slice(0);
                    main.methods.togglehighlight(options);

                    break;
                case "w_queen":
                    c1 = main.methods.w_options(position, [
                        { x: 1, y: 1 },
                        { x: 2, y: 2 },
                        { x: 3, y: 3 },
                        { x: 4, y: 4 },
                        { x: 5, y: 5 },
                        { x: 6, y: 6 },
                        { x: 7, y: 7 },
                    ]);
                    c2 = main.methods.w_options(position, [
                        { x: 1, y: -1 },
                        { x: 2, y: -2 },
                        { x: 3, y: -3 },
                        { x: 4, y: -4 },
                        { x: 5, y: -5 },
                        { x: 6, y: -6 },
                        { x: 7, y: -7 },
                    ]);
                    c3 = main.methods.w_options(position, [
                        { x: -1, y: 1 },
                        { x: -2, y: 2 },
                        { x: -3, y: 3 },
                        { x: -4, y: 4 },
                        { x: -5, y: 5 },
                        { x: -6, y: 6 },
                        { x: -7, y: 7 },
                    ]);
                    c4 = main.methods.w_options(position, [
                        { x: -1, y: -1 },
                        { x: -2, y: -2 },
                        { x: -3, y: -3 },
                        { x: -4, y: -4 },
                        { x: -5, y: -5 },
                        { x: -6, y: -6 },
                        { x: -7, y: -7 },
                    ]);
                    c5 = main.methods.w_options(position, [
                        { x: 1, y: 0 },
                        { x: 2, y: 0 },
                        { x: 3, y: 0 },
                        { x: 4, y: 0 },
                        { x: 5, y: 0 },
                        { x: 6, y: 0 },
                        { x: 7, y: 0 },
                    ]);
                    c6 = main.methods.w_options(position, [
                        { x: 0, y: 1 },
                        { x: 0, y: 2 },
                        { x: 0, y: 3 },
                        { x: 0, y: 4 },
                        { x: 0, y: 5 },
                        { x: 0, y: 6 },
                        { x: 0, y: 7 },
                    ]);
                    c7 = main.methods.w_options(position, [
                        { x: -1, y: 0 },
                        { x: -2, y: 0 },
                        { x: -3, y: 0 },
                        { x: -4, y: 0 },
                        { x: -5, y: 0 },
                        { x: -6, y: 0 },
                        { x: -7, y: 0 },
                    ]);
                    c8 = main.methods.w_options(position, [
                        { x: 0, y: -1 },
                        { x: 0, y: -2 },
                        { x: 0, y: -3 },
                        { x: 0, y: -4 },
                        { x: 0, y: -5 },
                        { x: 0, y: -6 },
                        { x: 0, y: -7 },
                    ]);

                    coordinates = c1
                        .concat(c2)
                        .concat(c3)
                        .concat(c4)
                        .concat(c5)
                        .concat(c6)
                        .concat(c7)
                        .concat(c8);

                    options = coordinates.slice(0);
                    main.variables.highlighted = options.slice(0);
                    main.methods.togglehighlight(options);

                    break;
                case "b_queen":
                    c1 = main.methods.b_options(position, [
                        { x: 1, y: 1 },
                        { x: 2, y: 2 },
                        { x: 3, y: 3 },
                        { x: 4, y: 4 },
                        { x: 5, y: 5 },
                        { x: 6, y: 6 },
                        { x: 7, y: 7 },
                    ]);
                    c2 = main.methods.b_options(position, [
                        { x: 1, y: -1 },
                        { x: 2, y: -2 },
                        { x: 3, y: -3 },
                        { x: 4, y: -4 },
                        { x: 5, y: -5 },
                        { x: 6, y: -6 },
                        { x: 7, y: -7 },
                    ]);
                    c3 = main.methods.b_options(position, [
                        { x: -1, y: 1 },
                        { x: -2, y: 2 },
                        { x: -3, y: 3 },
                        { x: -4, y: 4 },
                        { x: -5, y: 5 },
                        { x: -6, y: 6 },
                        { x: -7, y: 7 },
                    ]);
                    c4 = main.methods.b_options(position, [
                        { x: -1, y: -1 },
                        { x: -2, y: -2 },
                        { x: -3, y: -3 },
                        { x: -4, y: -4 },
                        { x: -5, y: -5 },
                        { x: -6, y: -6 },
                        { x: -7, y: -7 },
                    ]);
                    c5 = main.methods.b_options(position, [
                        { x: 1, y: 0 },
                        { x: 2, y: 0 },
                        { x: 3, y: 0 },
                        { x: 4, y: 0 },
                        { x: 5, y: 0 },
                        { x: 6, y: 0 },
                        { x: 7, y: 0 },
                    ]);
                    c6 = main.methods.b_options(position, [
                        { x: 0, y: 1 },
                        { x: 0, y: 2 },
                        { x: 0, y: 3 },
                        { x: 0, y: 4 },
                        { x: 0, y: 5 },
                        { x: 0, y: 6 },
                        { x: 0, y: 7 },
                    ]);
                    c7 = main.methods.b_options(position, [
                        { x: -1, y: 0 },
                        { x: -2, y: 0 },
                        { x: -3, y: 0 },
                        { x: -4, y: 0 },
                        { x: -5, y: 0 },
                        { x: -6, y: 0 },
                        { x: -7, y: 0 },
                    ]);
                    c8 = main.methods.b_options(position, [
                        { x: 0, y: -1 },
                        { x: 0, y: -2 },
                        { x: 0, y: -3 },
                        { x: 0, y: -4 },
                        { x: 0, y: -5 },
                        { x: 0, y: -6 },
                        { x: 0, y: -7 },
                    ]);

                    coordinates = c1
                        .concat(c2)
                        .concat(c3)
                        .concat(c4)
                        .concat(c5)
                        .concat(c6)
                        .concat(c7)
                        .concat(c8);

                    options = coordinates.slice(0);
                    main.variables.highlighted = options.slice(0);
                    main.methods.togglehighlight(options);

                    break;

                case "w_bishop":
                    c1 = main.methods.w_options(position, [
                        { x: 1, y: 1 },
                        { x: 2, y: 2 },
                        { x: 3, y: 3 },
                        { x: 4, y: 4 },
                        { x: 5, y: 5 },
                        { x: 6, y: 6 },
                        { x: 7, y: 7 },
                    ]);
                    c2 = main.methods.w_options(position, [
                        { x: 1, y: -1 },
                        { x: 2, y: -2 },
                        { x: 3, y: -3 },
                        { x: 4, y: -4 },
                        { x: 5, y: -5 },
                        { x: 6, y: -6 },
                        { x: 7, y: -7 },
                    ]);
                    c3 = main.methods.w_options(position, [
                        { x: -1, y: 1 },
                        { x: -2, y: 2 },
                        { x: -3, y: 3 },
                        { x: -4, y: 4 },
                        { x: -5, y: 5 },
                        { x: -6, y: 6 },
                        { x: -7, y: 7 },
                    ]);
                    c4 = main.methods.w_options(position, [
                        { x: -1, y: -1 },
                        { x: -2, y: -2 },
                        { x: -3, y: -3 },
                        { x: -4, y: -4 },
                        { x: -5, y: -5 },
                        { x: -6, y: -6 },
                        { x: -7, y: -7 },
                    ]);

                    coordinates = c1.concat(c2).concat(c3).concat(c4);

                    options = coordinates.slice(0);
                    main.variables.highlighted = options.slice(0);
                    main.methods.togglehighlight(options);

                    break;

                case "b_bishop":
                    c1 = main.methods.b_options(position, [
                        { x: 1, y: 1 },
                        { x: 2, y: 2 },
                        { x: 3, y: 3 },
                        { x: 4, y: 4 },
                        { x: 5, y: 5 },
                        { x: 6, y: 6 },
                        { x: 7, y: 7 },
                    ]);
                    c2 = main.methods.b_options(position, [
                        { x: 1, y: -1 },
                        { x: 2, y: -2 },
                        { x: 3, y: -3 },
                        { x: 4, y: -4 },
                        { x: 5, y: -5 },
                        { x: 6, y: -6 },
                        { x: 7, y: -7 },
                    ]);
                    c3 = main.methods.b_options(position, [
                        { x: -1, y: 1 },
                        { x: -2, y: 2 },
                        { x: -3, y: 3 },
                        { x: -4, y: 4 },
                        { x: -5, y: 5 },
                        { x: -6, y: 6 },
                        { x: -7, y: 7 },
                    ]);
                    c4 = main.methods.b_options(position, [
                        { x: -1, y: -1 },
                        { x: -2, y: -2 },
                        { x: -3, y: -3 },
                        { x: -4, y: -4 },
                        { x: -5, y: -5 },
                        { x: -6, y: -6 },
                        { x: -7, y: -7 },
                    ]);

                    coordinates = c1.concat(c2).concat(c3).concat(c4);

                    options = coordinates.slice(0);
                    main.variables.highlighted = options.slice(0);
                    main.methods.togglehighlight(options);
                    break;
                case "w_knight":
                    coordinates = [
                        { x: -1, y: 2 },
                        { x: 1, y: 2 },
                        { x: 1, y: -2 },
                        { x: -1, y: -2 },
                        { x: 2, y: 1 },
                        { x: 2, y: -1 },
                        { x: -2, y: -1 },
                        { x: -2, y: 1 },
                    ].map(function (val) {
                        return (
                            parseInt(position.x) +
                            parseInt(val.x) +
                            "_" +
                            (parseInt(position.y) + parseInt(val.y))
                        );
                    });

                    options = main.methods
                        .options(
                            startpoint,
                            coordinates,
                            main.variables.pieces[selectedpiece].type
                        )
                        .slice(0);
                    main.variables.highlighted = options.slice(0);
                    main.methods.togglehighlight(options);

                    break;
                case "b_knight":
                    coordinates = [
                        { x: -1, y: 2 },
                        { x: 1, y: 2 },
                        { x: 1, y: -2 },
                        { x: -1, y: -2 },
                        { x: 2, y: 1 },
                        { x: 2, y: -1 },
                        { x: -2, y: -1 },
                        { x: -2, y: 1 },
                    ].map(function (val) {
                        return (
                            parseInt(position.x) +
                            parseInt(val.x) +
                            "_" +
                            (parseInt(position.y) + parseInt(val.y))
                        );
                    });

                    options = main.methods
                        .options(
                            startpoint,
                            coordinates,
                            main.variables.pieces[selectedpiece].type
                        )
                        .slice(0);
                    main.variables.highlighted = options.slice(0);
                    main.methods.togglehighlight(options);

                    break;
                case "w_rook":
                    c1 = main.methods.w_options(position, [
                        { x: 1, y: 0 },
                        { x: 2, y: 0 },
                        { x: 3, y: 0 },
                        { x: 4, y: 0 },
                        { x: 5, y: 0 },
                        { x: 6, y: 0 },
                        { x: 7, y: 0 },
                    ]);
                    c2 = main.methods.w_options(position, [
                        { x: 0, y: 1 },
                        { x: 0, y: 2 },
                        { x: 0, y: 3 },
                        { x: 0, y: 4 },
                        { x: 0, y: 5 },
                        { x: 0, y: 6 },
                        { x: 0, y: 7 },
                    ]);
                    c3 = main.methods.w_options(position, [
                        { x: -1, y: 0 },
                        { x: -2, y: 0 },
                        { x: -3, y: 0 },
                        { x: -4, y: 0 },
                        { x: -5, y: 0 },
                        { x: -6, y: 0 },
                        { x: -7, y: 0 },
                    ]);
                    c4 = main.methods.w_options(position, [
                        { x: 0, y: -1 },
                        { x: 0, y: -2 },
                        { x: 0, y: -3 },
                        { x: 0, y: -4 },
                        { x: 0, y: -5 },
                        { x: 0, y: -6 },
                        { x: 0, y: -7 },
                    ]);

                    coordinates = c1.concat(c2).concat(c3).concat(c4);

                    options = coordinates.slice(0);
                    main.variables.highlighted = options.slice(0);
                    main.methods.togglehighlight(options);

                    break;
                case "b_rook":
                    c1 = main.methods.b_options(position, [
                        { x: 1, y: 0 },
                        { x: 2, y: 0 },
                        { x: 3, y: 0 },
                        { x: 4, y: 0 },
                        { x: 5, y: 0 },
                        { x: 6, y: 0 },
                        { x: 7, y: 0 },
                    ]);
                    c2 = main.methods.b_options(position, [
                        { x: 0, y: 1 },
                        { x: 0, y: 2 },
                        { x: 0, y: 3 },
                        { x: 0, y: 4 },
                        { x: 0, y: 5 },
                        { x: 0, y: 6 },
                        { x: 0, y: 7 },
                    ]);
                    c3 = main.methods.b_options(position, [
                        { x: -1, y: 0 },
                        { x: -2, y: 0 },
                        { x: -3, y: 0 },
                        { x: -4, y: 0 },
                        { x: -5, y: 0 },
                        { x: -6, y: 0 },
                        { x: -7, y: 0 },
                    ]);
                    c4 = main.methods.b_options(position, [
                        { x: 0, y: -1 },
                        { x: 0, y: -2 },
                        { x: 0, y: -3 },
                        { x: 0, y: -4 },
                        { x: 0, y: -5 },
                        { x: 0, y: -6 },
                        { x: 0, y: -7 },
                    ]);

                    coordinates = c1.concat(c2).concat(c3).concat(c4);

                    options = coordinates.slice(0);
                    main.variables.highlighted = options.slice(0);
                    main.methods.togglehighlight(options);

                    break;
                case "w_pawn":
                    if (main.variables.pieces[selectedpiece].moved == false) {
                        coordinates = [
                            { x: 0, y: 1 },
                            { x: 0, y: 2 },
                            { x: 1, y: 1 },
                            { x: -1, y: 1 },
                        ].map(function (val) {
                            return (
                                parseInt(position.x) +
                                parseInt(val.x) +
                                "_" +
                                (parseInt(position.y) + parseInt(val.y))
                            );
                        });
                    } else if (main.variables.pieces[selectedpiece].moved == true) {
                        coordinates = [
                            { x: 0, y: 1 },
                            { x: 1, y: 1 },
                            { x: -1, y: 1 },
                        ].map(function (val) {
                            return (
                                parseInt(position.x) +
                                parseInt(val.x) +
                                "_" +
                                (parseInt(position.y) + parseInt(val.y))
                            );
                        });
                    }

                    options = main.methods
                        .options(
                            startpoint,
                            coordinates,
                            main.variables.pieces[selectedpiece].type
                        )
                        .slice(0);
                    main.variables.highlighted = options.slice(0);
                    main.methods.togglehighlight(options);

                    break;

                case "b_pawn":
                    // calculate pawn options
                    if (main.variables.pieces[selectedpiece].moved == false) {
                        coordinates = [
                            { x: 0, y: -1 },
                            { x: 0, y: -2 },
                            { x: 1, y: -1 },
                            { x: -1, y: -1 },
                        ].map(function (val) {
                            return (
                                parseInt(position.x) +
                                parseInt(val.x) +
                                "_" +
                                (parseInt(position.y) + parseInt(val.y))
                            );
                        });
                    } else if (main.variables.pieces[selectedpiece].moved == true) {
                        coordinates = [
                            { x: 0, y: -1 },
                            { x: 1, y: -1 },
                            { x: -1, y: -1 },
                        ].map(function (val) {
                            return (
                                parseInt(position.x) +
                                parseInt(val.x) +
                                "_" +
                                (parseInt(position.y) + parseInt(val.y))
                            );
                        });
                    }

                    options = main.methods
                        .options(
                            startpoint,
                            coordinates,
                            main.variables.pieces[selectedpiece].type
                        )
                        .slice(0);
                    main.variables.highlighted = options.slice(0);
                    main.methods.togglehighlight(options);

                    break;
            }
        },

        options: function (startpoint, coordinates, piecetype) {
            // first check if any of the possible coordinates is out of bounds;

            coordinates = coordinates.filter((val) => {
                let pos = { x: 0, y: 0 };
                pos.x = parseInt(val.split("_")[0]);
                pos.y = parseInt(val.split("_")[1]);

                if (!(pos.x < 1) && !(pos.x > 8) && !(pos.y < 1) && !(pos.y > 8)) {
                    // if it is not out of bounds, return the coordinate;
                    return val;
                }
            });

            switch (piecetype) {
                case "w_king":
                    coordinates = coordinates.filter((val) => {
                        return (
                            $("#" + val).attr("chess") == "null" ||
                            $("#" + val)
                                .attr("chess")
                                .slice(0, 1) == "b"
                        );
                    });

                    break;
                case "b_king":
                    coordinates = coordinates.filter((val) => {
                        return (
                            $("#" + val).attr("chess") == "null" ||
                            $("#" + val)
                                .attr("chess")
                                .slice(0, 1) == "w"
                        );
                    });

                    break;
                case "w_knight":
                    coordinates = coordinates.filter((val) => {
                        return (
                            $("#" + val).attr("chess") == "null" ||
                            $("#" + val)
                                .attr("chess")
                                .slice(0, 1) == "b"
                        );
                    });

                    break;

                case "b_knight":
                    coordinates = coordinates.filter((val) => {
                        return (
                            $("#" + val).attr("chess") == "null" ||
                            $("#" + val)
                                .attr("chess")
                                .slice(0, 1) == "w"
                        );
                    });

                    break;

                case "w_pawn":
                    coordinates = coordinates.filter((val) => {
                        let sp = { x: 0, y: 0 };
                        let coordinate = val.split("_");

                        sp.x = startpoint.split("_")[0];
                        sp.y = startpoint.split("_")[1];

                        if (coordinate[0] < sp.x || coordinate[0] > sp.x) {
                            // if the coordinate is on either side of the center, check if it has an opponent piece on it;
                            return (
                                $("#" + val).attr("chess") != "null" &&
                                $("#" + val)
                                    .attr("chess")
                                    .slice(0, 1) == "b"
                            ); // return coordinates with opponent pieces on them
                        } else {
                            // else if the coordinate is in the center;
                            if (
                                coordinate[1] == parseInt(sp.y) + 2 &&
                                $("#" + sp.x + "_" + (parseInt(sp.y) + 1)).attr("chess") !=
                                "null"
                            ) {
                                // do nothing if this is the pawns first move, and there is a piece in front of the 2nd coordinate;
                            } else {
                                return $("#" + val).attr("chess") == "null"; // otherwise return the coordinate if there is no chess piece on it;
                            }
                        }
                    });

                    break;

                case "b_pawn":
                    coordinates = coordinates.filter((val) => {
                        let sp = { x: 0, y: 0 };
                        let coordinate = val.split("_");

                        sp.x = startpoint.split("_")[0];
                        sp.y = startpoint.split("_")[1];

                        if (coordinate[0] < sp.x || coordinate[0] > sp.x) {
                            // if the coordinate is on either side of the center, check if it has an opponent piece on it;
                            return (
                                $("#" + val).attr("chess") != "null" &&
                                $("#" + val)
                                    .attr("chess")
                                    .slice(0, 1) == "w"
                            ); // return coordinates with opponent pieces on them
                        } else {
                            // else if the coordinate is in the center;
                            if (
                                coordinate[1] == parseInt(sp.y) - 2 &&
                                $("#" + sp.x + "_" + (parseInt(sp.y) - 1)).attr("chess") !=
                                "null"
                            ) {
                                // do nothing if this is the pawns first move, and there is a piece in front of the 2nd coordinate;
                            } else {
                                return $("#" + val).attr("chess") == "null"; // otherwise return the coordinate if there is no chess piece on it;
                            }
                        }
                    });

                    break;
            }

            return coordinates;
        },

        w_options: function (position, coordinates) {
            let flag = false;

            coordinates = coordinates
                .map(function (val) {
                    // convert the x,y into actual grid id coordinates;
                    return (
                        parseInt(position.x) +
                        parseInt(val.x) +
                        "_" +
                        (parseInt(position.y) + parseInt(val.y))
                    );
                })
                .filter((val) => {
                    let pos = { x: 0, y: 0 };
                    pos.x = parseInt(val.split("_")[0]);
                    pos.y = parseInt(val.split("_")[1]);

                    if (!(pos.x < 1) && !(pos.x > 8) && !(pos.y < 1) && !(pos.y > 8)) {
                        // if it is not out of bounds, return the coordinate;
                        return val;
                    }
                })
                .filter((val) => {
                    // algorithm to determine line-of-sight movement options for bishop/rook/queen;
                    if (flag == false) {
                        if ($("#" + val).attr("chess") == "null") {
                            console.log(val);
                            return val;
                        } else if (
                            $("#" + val)
                                .attr("chess")
                                .slice(0, 1) == "b"
                        ) {
                            flag = true;
                            console.log(val);
                            return val;
                        } else if (
                            $("#" + val)
                                .attr("chess")
                                .slice(0, 1) == "w"
                        ) {
                            console.log(val + "-3");
                            flag = true;
                        }
                    }
                });

            return coordinates;
        },

        b_options: function (position, coordinates) {
            let flag = false;

            coordinates = coordinates
                .map(function (val) {
                    // convert the x,y into actual grid id coordinates;
                    return (
                        parseInt(position.x) +
                        parseInt(val.x) +
                        "_" +
                        (parseInt(position.y) + parseInt(val.y))
                    );
                })
                .filter((val) => {
                    let pos = { x: 0, y: 0 };
                    pos.x = parseInt(val.split("_")[0]);
                    pos.y = parseInt(val.split("_")[1]);

                    if (!(pos.x < 1) && !(pos.x > 8) && !(pos.y < 1) && !(pos.y > 8)) {
                        // if it is not out of bounds, return the coordinate;
                        return val;
                    }
                })
                .filter((val) => {
                    // algorithm to determine line-of-sight movement options for bishop/rook/queen;
                    if (flag == false) {
                        if ($("#" + val).attr("chess") == "null") {
                            return val;
                        } else if (
                            $("#" + val)
                                .attr("chess")
                                .slice(0, 1) == "w"
                        ) {
                            flag = true;
                            return val;
                        } else if (
                            $("#" + val)
                                .attr("chess")
                                .slice(0, 1) == "b"
                        ) {
                            flag = true;
                        }
                    }
                });

            return coordinates;
        },

        capture: function (target) {
            let selectedpiece = {
                name: $("#" + main.variables.selectedpiece).attr("chess"),
                id: main.variables.selectedpiece,
            };
        
            // Mover la pieza capturadora a la celda objetivo
            $("#" + target.id).html(main.variables.pieces[selectedpiece.name].img);
            $("#" + target.id).attr("chess", selectedpiece.name);
        
            // Vaciar la celda original
            $("#" + selectedpiece.id).html("");
            $("#" + selectedpiece.id).attr("chess", "null");
        
            // Actualizar la posición de la pieza que realiza la captura
            main.variables.pieces[selectedpiece.name].position = target.id;
            main.variables.pieces[selectedpiece.name].moved = true;
        
            // Capturar la pieza objetivo
            let capturedPiece = target.name;
        
            // Verificar si la pieza capturada es el rey
            if (main.variables.pieces[capturedPiece].type === "w_king") {
                alert("¡El jugador negro gana!");
                window.location.reload()
                return;
            } else if (main.variables.pieces[capturedPiece].type === "b_king") {
                alert("¡El jugador blanco gana!");
                window.location.reload()
                return;
            }

            // Si no se capturó un rey, marcar la pieza como capturada
            main.variables.pieces[capturedPiece].captured = true;
        
            // Llamar al método para cambiar de turno
            //main.methods.endturn();
        
            // Código opcional comentado para desactivar el resaltado y reiniciar la selección de piezas
            /*
            main.methods.togglehighlight(main.variables.highlighted);
            main.variables.highlighted.length = 0;
            main.variables.selectedpiece = '';
            */
        },
        

        move: function (target) {
            let selectedpiece = $("#" + main.variables.selectedpiece).attr("chess");
            console.log(selectedpiece);
        
            let piece = main.variables.pieces[selectedpiece];
            let startPos = main.variables.selectedpiece.split("_").map(Number);
            let endPos = target.id.split("_").map(Number);

            // Verificar si la casilla destino está en las casillas resaltadas
            let isHighlighted = main.variables.highlighted.includes(target.id);

            if (!isHighlighted) {
                alert("Movimiento no permitido. Solo puedes moverte a una casilla resaltada.");
                main.variables.lastMoveValid = false;
                return; // Sale de la función si no es una casilla válida
            }            
        
            // Verifica si el movimiento es válido
            if (!this.isValidMove(piece, startPos, endPos)) {
                console.log("Movimiento no válido.");
                alert("Movimiento no válido. Por favor, intenta de nuevo."); // Muestra un mensaje de error
                main.variables.lastMoveValid = false;
                return; // Sale de la función sin hacer el movimiento
            }
        
            // Realiza el movimiento si es válido
            $("#" + target.id).html(piece.img);
            $("#" + target.id).attr("chess", selectedpiece);
        
            $("#" + main.variables.selectedpiece).html("");
            $("#" + main.variables.selectedpiece).attr("chess", "null");
        
            piece.position = target.id;
            piece.moved = true;
            main.variables.lastMoveValid = true;
        
            // Opcional: Código comentado para manejo adicional
            /*
            main.methods.togglehighlight(main.variables.highlighted);
            main.variables.highlighted.length = 0;
            main.variables.selectedpiece = '';
            */
        },

        isValidMove: function (piece, startPos, endPos) {
            switch (piece.type) {
                case "w_rook":
                case "b_rook":
                    return this.isValidRookMove(startPos, endPos);
                case "w_bishop":
                case "b_bishop":
                    return this.isValidBishopMove(startPos, endPos);
                case "w_queen":
                case "b_queen":
                    return this.isValidQueenMove(startPos, endPos);
                case "w_knight":
                case "b_knight":
                    return this.isValidKnightMove(startPos, endPos);
                case "w_pawn":
                    return this.isValidWhitePawnMove(startPos, endPos);
                case "b_pawn":
                    return this.isValidBlackPawnMove(startPos, endPos);
                case "w_king":
                case "b_king":
                    return this.isValidKingMove(startPos, endPos);
                default:
                    return false;
            }
        },

        isValidRookMove: function (startPos, endPos) {
            return startPos[0] === endPos[0] || startPos[1] === endPos[1];
        },

        isValidBishopMove: function (startPos, endPos) {
            return (
                Math.abs(startPos[0] - endPos[0]) === Math.abs(startPos[1] - endPos[1])
            );
        },

        isValidQueenMove: function (startPos, endPos) {
            return (
                this.isValidRookMove(startPos, endPos) ||
                this.isValidBishopMove(startPos, endPos)
            );
        },

        isValidKnightMove: function (startPos, endPos) {
            return (
                (Math.abs(startPos[0] - endPos[0]) === 2 &&
                    Math.abs(startPos[1] - endPos[1]) === 1) ||
                (Math.abs(startPos[0] - endPos[0]) === 1 &&
                    Math.abs(startPos[1] - endPos[1]) === 2)
            );
        },

        isValidWhitePawnMove(startPos, endPos) {
            let selectedpiece = $("#" + main.variables.selectedpiece).attr("chess");
            const [startX, startY] = startPos;
            const [endX, endY] = endPos;
        
            // Movimiento de una casilla hacia adelante
            if (endX === startX && endY === startY + 1) {
                return $('#' + endX + '_' + endY).attr('chess') === 'null';
            }
        
            // Movimiento de dos casillas hacia adelante (solo si es el primer movimiento)
            if (!main.variables.pieces[selectedpiece].moved && endX === startX && endY === startY + 2) {
                // Asegúrate de que la casilla intermedia esté libre
                const intermediateCell = $('#' + startX + '_' + (startY + 1)).attr('chess');
                return intermediateCell === 'null' && $('#' + endX + '_' + endY).attr('chess') === 'null';
            }
        
            // Captura en diagonal
            if ((endX === startX + 1 || endX === startX - 1) && endY === startY + 1) {
                const targetCell = $('#' + endX + '_' + endY).attr('chess');
                return targetCell !== 'null' && targetCell.slice(0, 1) === 'b'; // Captura pieza negra
            }
        
            return false;
        },

        isValidBlackPawnMove(startPos, endPos) {
            let selectedpiece = $("#" + main.variables.selectedpiece).attr("chess");
            const [startX, startY] = startPos;
            const [endX, endY] = endPos;
        
            // Movimiento de una casilla hacia adelante
            if (endX === startX && endY === startY - 1) {
                return $('#' + endX + '_' + endY).attr('chess') === 'null';
            }
        
            // Movimiento de dos casillas hacia adelante (solo si es el primer movimiento)
            if (!main.variables.pieces[selectedpiece].moved && endX === startX && endY === startY - 2) {
                // Asegúrate de que la casilla intermedia esté libre
                const intermediateCell = $('#' + startX + '_' + (startY - 1)).attr('chess');
                return intermediateCell === 'null' && $('#' + endX + '_' + endY).attr('chess') === 'null';
            }
        
            // Captura en diagonal
            if ((endX === startX + 1 || endX === startX - 1) && endY === startY - 1) {
                const targetCell = $('#' + endX + '_' + endY).attr('chess');
                return targetCell !== 'null' && targetCell.slice(0, 1) === 'w'; // Captura pieza blanca
            }
        
            return false;
        },    

        isValidKingMove: function (startPos, endPos) {
            return (
                Math.abs(startPos[0] - endPos[0]) <= 1 &&
                Math.abs(startPos[1] - endPos[1]) <= 1
            );
        },

        endturn: function () {
            // Verifica si el último movimiento fue válido
            if (!main.variables.lastMoveValid) {
                return; // Detiene el cambio de turno
            }            
            if (main.variables.turn == "w") {
                main.variables.turn = "b";

                // toggle highlighted coordinates
                main.methods.togglehighlight(main.variables.highlighted);
                main.variables.highlighted.length = 0;
                // set the selected piece to '' again
                main.variables.selectedpiece = "";

                $("#turn").html("It's Blacks Turn");

                $("#turn").addClass("turnhighlight");
                window.setTimeout(function () {
                    $("#turn").removeClass("turnhighlight");
                }, 1500);
            } else if ((main.variables.turn = "b")) {
                main.variables.turn = "w";

                // toggle highlighted coordinates
                main.methods.togglehighlight(main.variables.highlighted);
                main.variables.highlighted.length = 0;
                // set the selected piece to '' again
                main.variables.selectedpiece = "";

                $("#turn").html("It's Whites Turn");

                $("#turn").addClass("turnhighlight");
                window.setTimeout(function () {
                    $("#turn").removeClass("turnhighlight");
                }, 1500);
            }
        },

        togglehighlight: function (options) {
            options.forEach(function (element, index, array) {
                $("#" + element).toggleClass("green shake-little neongreen_txt");
            });
        } 
    },
};

$(document).ready(function () {
    main.methods.gamesetup();

    $(".gamecell").click(function (e) {
        var selectedpiece = {
            name: "",
            id: main.variables.selectedpiece,
        };

        if (main.variables.selectedpiece == "") {
            selectedpiece.name = $("#" + e.target.id).attr("chess");
        } else {
            selectedpiece.name = $("#" + main.variables.selectedpiece).attr("chess");
        }

        var target = {
            name: $(this).attr("chess"),
            id: e.target.id,
        };

        if (
            main.variables.selectedpiece == "" &&
            target.name.slice(0, 1) == main.variables.turn
        ) {
            // show options

            // moveoptions
            main.variables.selectedpiece = e.target.id;
            main.methods.moveoptions($(this).attr("chess"));
        } else if (main.variables.selectedpiece != "" && target.name == "null") {
            // move selected piece piece

            if (selectedpiece.name == "w_king" || selectedpiece.name == "b_king") {
                let t0 = (selectedpiece.name = "w_king");
                let t1 = (selectedpiece.name = "b_king");
                let t2 = main.variables.pieces[selectedpiece.name].moved == false;
                let t3 = main.variables.pieces["b_rook2"].moved == false;
                let t4 = main.variables.pieces["w_rook2"].moved == false;
                let t5 = target.id == "7_8";
                let t6 = target.id == "7_1";

                if (t0 && t2 && t4 && t6) {
                    // castle w_king

                    let k_position = "5_1";
                    let k_target = "7_1";
                    let r_position = "8_1";
                    let r_target = "6_1";

                    main.variables.pieces["w_king"].position = "7_1";
                    main.variables.pieces["w_king"].moved = true;
                    $("#" + k_position).html("");
                    $("#" + k_position).attr("chess", "null");
                    $("#" + k_target).html(main.variables.pieces["w_king"].img);
                    $("#" + k_target).attr("chess", "w_king");

                    main.variables.pieces["w_rook2"].position = "6_1";
                    main.variables.pieces["w_rook2"].moved = true;
                    $("#" + r_position).html("");
                    $("#" + r_position).attr("chess", "null");
                    $("#" + r_target).html(main.variables.pieces["w_rook2"].img);
                    $("#" + r_target).attr("chess", "w_rook2");

                    main.methods.endturn();
                } else if (t1 && t2 && t3 && t5) {
                    // castle b_king

                    let k_position = "5_8";
                    let k_target = "7_8";
                    let r_position = "8_8";
                    let r_target = "6_8";

                    // w_king
                    main.variables.pieces["b_king"].position = "7_8";
                    main.variables.pieces["b_king"].moved = true;
                    $("#" + k_position).html("");
                    $("#" + k_position).attr("chess", "null");
                    $("#" + k_target).html(main.variables.pieces["b_king"].img);
                    $("#" + k_target).attr("chess", "b_king");

                    main.variables.pieces["b_rook2"].position = "6_8";
                    main.variables.pieces["b_rook2"].moved = true;
                    $("#" + r_position).html("");
                    $("#" + r_position).attr("chess", "null");
                    $("#" + r_target).html(main.variables.pieces["b_rook2"].img);
                    $("#" + r_target).attr("chess", "b_rook2");

                    main.methods.endturn();
                } else {
                    // move selectedpiece
                    main.methods.move(target);
                    main.methods.endturn();
                }
            } else {
                // else if selecedpiece.name is not white/black king than move

                main.methods.move(target);
                main.methods.endturn();
            }
        } else if (
            main.variables.selectedpiece != "" &&
            target.name != "null" &&
            target.id != selectedpiece.id &&
            selectedpiece.name.slice(0, 1) != target.name.slice(0, 1)
        ) {
            // capture a piece

            if (
                selectedpiece.id != target.id &&
                main.variables.highlighted.indexOf(target.id) != -1
            ) {
                // if it's not trying to capture pieces not in its movement range

                // capture
                main.methods.capture(target);
                main.methods.endturn();
            }
        } else if (
            main.variables.selectedpiece != "" &&
            target.name != "null" &&
            target.id != selectedpiece.id &&
            selectedpiece.name.slice(0, 1) == target.name.slice(0, 1)
        ) {
            // toggle move options

            // toggle
            main.methods.togglehighlight(main.variables.highlighted);
            main.variables.highlighted.length = 0;

            main.variables.selectedpiece = target.id;
            main.methods.moveoptions(target.name);
        }
    });

    $("body").contextmenu(function (e) {
        e.preventDefault();
    });
});
