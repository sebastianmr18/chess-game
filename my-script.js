let main = {
    variables: {
        turn: 'w',
        selectedPiece: '',
        highlighted: [],
        pieces: {
            w_king:{
                position: 'e_1',
                img: '&#9812',
                captured: false,
                moved: false,
                type: 'w_king'
            },
            w_queen: {
              position: 'd_1',
              img: '&#9813;',
              captured: false,
              moved: false,
              type: 'w_queen'
            },
            w_bishop1: {
              position: 'c_1',
              img: '&#9815;',
              captured: false,
              moved: false,
              type: 'w_bishop'
            },
            w_bishop2: {
              position: 'f_1',
              img: '&#9815;',
              captured: false,
              moved: false,
              type: 'w_bishop'
            },
            w_knight1: {
              position: 'b_1',
              img: '&#9816;',
              captured: false,
              moved: false,
              type: 'w_knight'
            },
            w_knight2: {
              position: 'g_1',
              img: '&#9816;',
              captured: false,
              moved: false,
              type: 'w_knight'
            },
            w_rook1: {
              position: 'a_1',
              img: '&#9814;',
              captured: false,
              moved: false,
              type: 'w_rook'
            },
            w_rook2: {
              position: 'h_1',
              img: '&#9814;',
              captured: false,
              moved: false,
              type: 'w_rook'
            },
            w_pawn1: {
              position: 'a_2',
              img: '&#9817;',
              captured: false,
              type: 'w_pawn',
              moved: false
            },
            w_pawn2: {
              position: 'b_2',
              img: '&#9817;',
              captured: false,
              type: 'w_pawn',
              moved: false
            },
            w_pawn3: {
              position: 'c_2',
              img: '&#9817;',
              captured: false,
              type: 'w_pawn',
              moved: false
            },
            w_pawn4: {
              position: 'd_2',
              img: '&#9817;',
              captured: false,
              type: 'w_pawn',
              moved: false
            },
            w_pawn5: {
              position: 'e_2',
              img: '&#9817;',
              captured: false,
              type: 'w_pawn',
              moved: false
            },
            w_pawn6: {
              position: 'f_2',
              img: '&#9817;',
              captured: false,
              type: 'w_pawn',
              moved: false
            },
            w_pawn7: {
              position: 'g_2',
              img: '&#9817;',
              captured: false,
              type: 'w_pawn',
              moved: false
            },
            w_pawn8: {
              position: 'h_2',
              img: '&#9817;',
              captured: false,
              type: 'w_pawn',
              moved: false
            },
      
            b_king: {
              position: 'e_8',
              img: '&#9818;',
              captured: false,
              moved: false,
              type: 'b_king'
            },
            b_queen: {
              position: 'd_8',
              img: '&#9819;',
              captured: false,
              moved: false,
              type: 'b_queen'
            },
            b_bishop1: {
              position: 'c_8',
              img: '&#9821;',
              captured: false,
              moved: false,
              type: 'b_bishop'
            },
            b_bishop2: {
              position: 'f_8',
              img: '&#9821;',
              captured: false,
              moved: false,
              type: 'b_bishop'
            },
            b_knight1: {
              position: 'b_8',
              img: '&#9822;',
              captured: false,
              moved: false,
              type: 'b_knight'
            },
            b_knight2: {
              position: 'g_8',
              img: '&#9822;',
              captured: false,
              moved: false,
              type: 'b_knight'
            },
            b_rook1: {
              position: 'a_8',
              img: '&#9820;',
              captured: false,
              moved: false,
              type: 'b_rook'
            },
            b_rook2: {
              position: 'h_8',
              img: '&#9820;',
              captured: false,
              moved: false,
              type: 'b_rook'
            },
            b_pawn1: {
              position: 'a_7',
              img: '&#9823;',
              captured: false,
              type: 'b_pawn',
              moved: false
            },
            b_pawn2: {
              position: 'a_7',
              img: '&#9823;',
              captured: false,
              type: 'b_pawn',
              moved: false
            },
            b_pawn3: {
              position: 'c_7',
              img: '&#9823;',
              captured: false,
              type: 'b_pawn',
              moved: false
            },
            b_pawn4: {
              position: 'd_7',
              img: '&#9823;',
              captured: false,
              type: 'b_pawn',
              moved: false
            },
            b_pawn5: {
              position: 'e_7',
              img: '&#9823;',
              captured: false,
              type: 'b_pawn',
              moved: false
            },
            b_pawn6: {
              position: 'f_7',
              img: '&#9823;',
              captured: false,
              type: 'b_pawn',
              moved: false
            },
            b_pawn7: {
              position: 'g_7',
              img: '&#9823;',
              captured: false,
              type: 'b_pawn',
              moved: false
            },
            b_pawn8: {
              position: 'h_7',
              img: '&#9823;',
              captured: false,
              type: 'b_pawn',
              moved: false
            }
        }
    },

    methods: {
        gamesetup: function() {
            $('.gamecell').atrr('chess', 'null');
            for (let gamepiece in main.variables.pieces) {
                $('#' + main.variables.pieces[gamepiece].position).html(main.variables.pieces[gamepiece].img)
                $('#' + main.variables.pieces[gamepiece].position).atrr('chess', gamepiece);
            }
        },
        moveOptions: function(selectedPiece) {
            let position = { x: '', y: '' };

            // Get the letter and number from the position
            let letter = main.variables.pieces[selectedPiece].position.split('_')[0];
            let number = main.variables.pieces[selectedPiece].position.split('_')[1];
            
            // Convert letter to a number (A = 1, B = 2, ..., H = 8)
            position.x = letter.toLowerCase().charCodeAt(0) - 96; // 'a'.charCodeAt(0) = 97, so we substract 96
            position.y = number;
            
            console.log(position); // Debug
            

            var options = []; 
            var coordinates = [];
            var startpoint = main.variables.pieces[selectedpiece].position;
            var c1,c2,c3,c4,c5,c6,c7,c8;       
            
            if (main.variables.highlighted.length != 0) {
                main.methods.togglehighlight(main.variables.highlighted);
            }

            switch (main.variables.pieces[selectedPiece].type) {
                case 'w_king':

                    if ($('#f_1').attr('chess') == 'null' && $('#g_1').attr('chess') == 'null' && main.variables.pieces['w_king'].moved == false && main.variables.pieces['w_rook2'].moved == false) {
                        coordinates = [{ x: 1, y: 1 },{ x: 1, y: 0 },{ x: 1, y: -1 },{ x: 0, y: -1 },{ x: -1, y: -1 },{ x: -1, y: 0 },{ x: -1, y: 1 },{ x: 0, y: 1 },{x: 2, y: 0}].map(function(val){
                        return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                        });
                    } else {
                    coordinates = [{ x: 1, y: 1 },{ x: 1, y: 0 },{ x: 1, y: -1 },{ x: 0, y: -1 },{ x: -1, y: -1 },{ x: -1, y: 0 },{ x: -1, y: 1 },{ x: 0, y: 1 }].map(function(val){
                        return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                    });
                    }
            
                    options = (main.methods.options(startpoint, coordinates, main.variables.pieces[selectedpiece].type)).slice(0);
                    main.variables.highlighted = options.slice(0);
                    main.methods.togglehighlight(options);
        
                    break;
                
                case 'b_king':
                    if($('#f_8').attr('chess') == 'null' && $('#g_8').attr('chess') == 'null' && main.variables.pieces['b_king'].moved == false && main.variables.pieces['b_rook2'].moved == false){
                        coordinates = [{ x: 1, y: 1 },{ x: 1, y: 0 },{ x: 1, y: -1 },{ x: 0, y: -1 },{ x: -1, y: -1 },{ x: -1, y: 0 },{ x: -1, y: 1 },{ x: 0, y: 1 },{x: 2, y: 0}].map(function(val){
                            return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                            });
                        } else {
                            coordinates = [{ x: 1, y: 1 },{ x: 1, y: 0 },{ x: 1, y: -1 },{ x: 0, y: -1 },{ x: -1, y: -1 },{ x: -1, y: 0 },{ x: -1, y: 1 },{ x: 0, y: 1 }].map(function(val){
                            return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                            });
                        }
                        options = (main.methods.options(startpoint, coordinates, main.variables.pieces[selectedpiece].type)).slice(0);
                        main.variables.highlighted = options.slice(0);
                        main.methods.togglehighlight(options);
                
                    break;

                case 'w_queen':
                    c1 = main.methods.w_options(position,[{x: 1, y: 1},{x: 2, y: 2},{x: 3, y: 3},{x: 4, y: 4},{x: 5, y: 5},{x: 6, y: 6},{x: 7, y: 7}]);
                    c2 = main.methods.w_options(position,[{x: 1, y: -1},{x: 2, y: -2},{x: 3, y: -3},{x: 4, y: -4},{x: 5, y: -5},{x: 6, y: -6},{x: 7, y: -7}]);
                    c3 = main.methods.w_options(position,[{x: -1, y: 1},{x: -2, y: 2},{x: -3, y: 3},{x: -4, y: 4},{x: -5, y: 5},{x: -6, y: 6},{x: -7, y: 7}]);
                    c4 = main.methods.w_options(position,[{x: -1, y: -1},{x: -2, y: -2},{x: -3, y: -3},{x: -4, y: -4},{x: -5, y: -5},{x: -6, y: -6},{x: -7, y: -7}]);
                    c5 = main.methods.w_options(position,[{x: 1, y: 0},{x: 2, y: 0},{x: 3, y: 0},{x: 4, y: 0},{x: 5, y: 0},{x: 6, y: 0},{x: 7, y: 0}]);
                    c6 = main.methods.w_options(position,[{x: 0, y: 1},{x: 0, y: 2},{x: 0, y: 3},{x: 0, y: 4},{x: 0, y: 5},{x: 0, y: 6},{x: 0, y: 7}]);
                    c7 = main.methods.w_options(position,[{x: -1, y: 0},{x: -2, y: 0},{x: -3, y: 0},{x: -4, y: 0},{x: -5, y: 0},{x: -6, y: 0},{x: -7, y: 0}]);
                    c8 = main.methods.w_options(position,[{x: 0, y: -1},{x: 0, y: -2},{x: 0, y: -3},{x: 0, y: -4},{x: 0, y: -5},{x: 0, y: -6},{x: 0, y: -7}]);
          
                    coordinates = c1.concat(c2).concat(c3).concat(c4).concat(c5).concat(c6).concat(c7).concat(c8);
                    
                    options = coordinates.slice(0);
                    main.variables.highlighted = options.slice(0);
                    main.methods.togglehighlight(options);
                    break;
                case 'b_queen':
        
                    c1 = main.methods.b_options(position,[{x: 1, y: 1},{x: 2, y: 2},{x: 3, y: 3},{x: 4, y: 4},{x: 5, y: 5},{x: 6, y: 6},{x: 7, y: 7}]);
                    c2 = main.methods.b_options(position,[{x: 1, y: -1},{x: 2, y: -2},{x: 3, y: -3},{x: 4, y: -4},{x: 5, y: -5},{x: 6, y: -6},{x: 7, y: -7}]);
                    c3 = main.methods.b_options(position,[{x: -1, y: 1},{x: -2, y: 2},{x: -3, y: 3},{x: -4, y: 4},{x: -5, y: 5},{x: -6, y: 6},{x: -7, y: 7}]);
                    c4 = main.methods.b_options(position,[{x: -1, y: -1},{x: -2, y: -2},{x: -3, y: -3},{x: -4, y: -4},{x: -5, y: -5},{x: -6, y: -6},{x: -7, y: -7}]);
                    c5 = main.methods.b_options(position,[{x: 1, y: 0},{x: 2, y: 0},{x: 3, y: 0},{x: 4, y: 0},{x: 5, y: 0},{x: 6, y: 0},{x: 7, y: 0}]);
                    c6 = main.methods.b_options(position,[{x: 0, y: 1},{x: 0, y: 2},{x: 0, y: 3},{x: 0, y: 4},{x: 0, y: 5},{x: 0, y: 6},{x: 0, y: 7}]);
                    c7 = main.methods.b_options(position,[{x: -1, y: 0},{x: -2, y: 0},{x: -3, y: 0},{x: -4, y: 0},{x: -5, y: 0},{x: -6, y: 0},{x: -7, y: 0}]);
                    c8 = main.methods.b_options(position,[{x: 0, y: -1},{x: 0, y: -2},{x: 0, y: -3},{x: 0, y: -4},{x: 0, y: -5},{x: 0, y: -6},{x: 0, y: -7}]);
            
                    coordinates = c1.concat(c2).concat(c3).concat(c4).concat(c5).concat(c6).concat(c7).concat(c8);
                    
                    options = coordinates.slice(0);
                    main.variables.highlighted = options.slice(0);
                    main.methods.togglehighlight(options);
        
                    break;
                case 'w_bishop':
                    c1 = main.methods.w_options(position,[{x: 1, y: 1},{x: 2, y: 2},{x: 3, y: 3},{x: 4, y: 4},{x: 5, y: 5},{x: 6, y: 6},{x: 7, y: 7}]);
                    c2 = main.methods.w_options(position,[{x: 1, y: -1},{x: 2, y: -2},{x: 3, y: -3},{x: 4, y: -4},{x: 5, y: -5},{x: 6, y: -6},{x: 7, y: -7}]);
                    c3 = main.methods.w_options(position,[{x: -1, y: 1},{x: -2, y: 2},{x: -3, y: 3},{x: -4, y: 4},{x: -5, y: 5},{x: -6, y: 6},{x: -7, y: 7}]);
                    c4 = main.methods.w_options(position,[{x: -1, y: -1},{x: -2, y: -2},{x: -3, y: -3},{x: -4, y: -4},{x: -5, y: -5},{x: -6, y: -6},{x: -7, y: -7}]);
            
                    coordinates = c1.concat(c2).concat(c3).concat(c4);
            
                    options = coordinates.slice(0);
                    main.variables.highlighted = options.slice(0);
                    main.methods.togglehighlight(options);
            
                    break;
                case 'b_bishop':
                    c1 = main.methods.b_options(position,[{x: 1, y: 1},{x: 2, y: 2},{x: 3, y: 3},{x: 4, y: 4},{x: 5, y: 5},{x: 6, y: 6},{x: 7, y: 7}]);
                    c2 = main.methods.b_options(position,[{x: 1, y: -1},{x: 2, y: -2},{x: 3, y: -3},{x: 4, y: -4},{x: 5, y: -5},{x: 6, y: -6},{x: 7, y: -7}]);
                    c3 = main.methods.b_options(position,[{x: -1, y: 1},{x: -2, y: 2},{x: -3, y: 3},{x: -4, y: 4},{x: -5, y: 5},{x: -6, y: 6},{x: -7, y: 7}]);
                    c4 = main.methods.b_options(position,[{x: -1, y: -1},{x: -2, y: -2},{x: -3, y: -3},{x: -4, y: -4},{x: -5, y: -5},{x: -6, y: -6},{x: -7, y: -7}]);
          
                    coordinates = c1.concat(c2).concat(c3).concat(c4);
          
                    options = coordinates.slice(0);
                    main.variables.highlighted = options.slice(0);
                    main.methods.togglehighlight(options);

                    break;
                case 'w_knight':
                    
                    coordinates = [{ x: -1, y: 2 },{ x: 1, y: 2 },{ x: 1, y: -2 },{ x: -1, y: -2 },{ x: 2, y: 1 },{ x: 2, y: -1 },{ x: -2, y: -1 },{ x: -2, y: 1 }].map(function(val){
                        return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                    });
            
                    options = (main.methods.options(startpoint, coordinates, main.variables.pieces[selectedpiece].type)).slice(0);
                    main.variables.highlighted = options.slice(0);
                    main.methods.togglehighlight(options);
            
                    break;
                
                case 'b_knight':

                    coordinates = [{ x: -1, y: 2 },{ x: 1, y: 2 },{ x: 1, y: -2 },{ x: -1, y: -2 },{ x: 2, y: 1 },{ x: 2, y: -1 },{ x: -2, y: -1 },{ x: -2, y: 1 }].map(function(val){
                        return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                    });
            
                    options = (main.methods.options(startpoint, coordinates, main.variables.pieces[selectedpiece].type)).slice(0);
                    main.variables.highlighted = options.slice(0);
                    main.methods.togglehighlight(options);
            
                    break;
                
                case 'w_rook':

                    c1 = main.methods.w_options(position,[{x: 1, y: 0},{x: 2, y: 0},{x: 3, y: 0},{x: 4, y: 0},{x: 5, y: 0},{x: 6, y: 0},{x: 7, y: 0}]);
                    c2 = main.methods.w_options(position,[{x: 0, y: 1},{x: 0, y: 2},{x: 0, y: 3},{x: 0, y: 4},{x: 0, y: 5},{x: 0, y: 6},{x: 0, y: 7}]);
                    c3 = main.methods.w_options(position,[{x: -1, y: 0},{x: -2, y: 0},{x: -3, y: 0},{x: -4, y: 0},{x: -5, y: 0},{x: -6, y: 0},{x: -7, y: 0}]);
                    c4 = main.methods.w_options(position,[{x: 0, y: -1},{x: 0, y: -2},{x: 0, y: -3},{x: 0, y: -4},{x: 0, y: -5},{x: 0, y: -6},{x: 0, y: -7}]);
        
                    coordinates = c1.concat(c2).concat(c3).concat(c4);
        
                    options = coordinates.slice(0);
                    main.variables.highlighted = options.slice(0);
                    main.methods.togglehighlight(options);
                    
                    break;
                
                case 'b_rook':

                    c1 = main.methods.b_options(position,[{x: 1, y: 0},{x: 2, y: 0},{x: 3, y: 0},{x: 4, y: 0},{x: 5, y: 0},{x: 6, y: 0},{x: 7, y: 0}]);
                    c2 = main.methods.b_options(position,[{x: 0, y: 1},{x: 0, y: 2},{x: 0, y: 3},{x: 0, y: 4},{x: 0, y: 5},{x: 0, y: 6},{x: 0, y: 7}]);
                    c3 = main.methods.b_options(position,[{x: -1, y: 0},{x: -2, y: 0},{x: -3, y: 0},{x: -4, y: 0},{x: -5, y: 0},{x: -6, y: 0},{x: -7, y: 0}]);
                    c4 = main.methods.b_options(position,[{x: 0, y: -1},{x: 0, y: -2},{x: 0, y: -3},{x: 0, y: -4},{x: 0, y: -5},{x: 0, y: -6},{x: 0, y: -7}]);
        
                    coordinates = c1.concat(c2).concat(c3).concat(c4);
        
                    options = coordinates.slice(0);
                    main.variables.highlighted = options.slice(0);
                    main.methods.togglehighlight(options);
                    
                    break;
                
                case 'w_pawn':
                    if (main.variables.pieces[selectedpiece].moved == false) {

                        coordinates = [{ x: 0, y: 1 },{ x: 0, y: 2 },{ x: 1, y: 1 },{ x: -1, y: 1 }].map(function(val){
                            return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                        });
            
                        }
                    else if (main.variables.pieces[selectedpiece].moved == true) {
        
                    coordinates = [{ x: 0, y: 1 },{ x: 1, y: 1 },{ x: -1, y: 1 }].map(function(val){
                        return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                    });
        
                    }
            
                    options = (main.methods.options(startpoint, coordinates, main.variables.pieces[selectedpiece].type)).slice(0);
                    main.variables.highlighted = options.slice(0);
                    main.methods.togglehighlight(options);
        
                    break;
                
                case 'b_pawn':
                    if (main.variables.pieces[selectedpiece].moved == false) {

                        coordinates = [{ x: 0, y: -1 },{ x: 0, y: -2 },{ x: 1, y: -1 },{ x: -1, y: -1 }].map(function(val){
                            return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                        });
            
                    }
                    else if (main.variables.pieces[selectedpiece].moved == true) {
        
                    coordinates = [{ x: 0, y: -1 },{ x: 1, y: -1 },{ x: -1, y: -1 }].map(function(val){
                        return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                    });
        
                    }
            
                    options = (main.methods.options(startpoint, coordinates, main.variables.pieces[selectedpiece].type)).slice(0);
                    main.variables.highlighted = options.slice(0);
                    main.methods.togglehighlight(options);
        
                    break;
            }
        },
        options: function(startpoint, coordinates, piecetype) {
            coordinates = coordinates.filter(val => {
                let pos = { x: 0, y: 0};
                pos.x = parseInt(val.split('_')[0]);
                pos.y = parseInt(val.split('_')[1]);

                console.log(pos) //Debug

                if (!(pos.x < 1) && !(pos.x > 8) && !(pos.y < 1) && !(pos.y > 8)) {
                    return val;
                }
            });

            switch (piecetype) {
                case 'w_king':

                    coordinates = coordinates.filter(val => {
                        return ($('#' + val).attr('chess') == 'null' || ($('#' + val).attr('chess')).slice(0,1) == 'b');
                    });
        
                    break;
                case 'b_king':
              
                    coordinates = coordinates.filter(val => {
                        return ($('#' + val).attr('chess') == 'null' || ($('#' + val).attr('chess')).slice(0,1) == 'w');
                    });       
                    
                    break;
            }
        }
    }
}    
