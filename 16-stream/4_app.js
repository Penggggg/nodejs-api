const { Transform } = require('stream');

class Bold extends Transform {
    constructor( ) {
        super( )
    }

    _transform( buf, enc, next ) {
        this.push( Buffer.from(`${buf.toString( )} - bold`));
        next( );
    }
}

class Red extends Transform {
    constructor( ) {
        super( )
    }

    _transform( buf, enc, next ) {
        this.push( Buffer.from(`${buf.toString( )} - red`));
        next( );
    }
}

const params = [
    `hello`, 
    `world`
];

const redStream = new Red( );
const boldStream = new Bold( );

// boldStream.on('data', data => {
//     console.log(`${Date.now( )} boldStream: ${data.toString( )}`)
//     redStream.write( data );
// });
boldStream.pipe( redStream );
redStream.on('data', data => {
    console.log( Date.now( ), data.toString( ))
});

params.map( p => boldStream.write( p ))
boldStream.end( );