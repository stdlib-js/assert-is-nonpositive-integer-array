/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/* eslint-disable no-new-wrappers */

'use strict';

var Number = require( '@stdlib/number-ctor' );
var isNonPositiveIntegerArray = require( './../lib' );

var bool = isNonPositiveIntegerArray( [ -5, -2, -3 ] );
console.log( bool );
// => true

bool = isNonPositiveIntegerArray( [ -4, -3, -2, -1 ] );
console.log( bool );
// => true

bool = isNonPositiveIntegerArray( [ -1, new Number( -6 ), -3 ] );
console.log( bool );
// => true

bool = isNonPositiveIntegerArray( [ -3, -2, -1, 0 ] );
console.log( bool );
// => true

bool = isNonPositiveIntegerArray( [ -3, -2, -1, 0, 2 ] );
console.log( bool );
// => false

bool = isNonPositiveIntegerArray( [ -1, 'abc', -3 ] );
console.log( bool );
// => false

bool = isNonPositiveIntegerArray( [ -2.3, -1, -3 ] );
console.log( bool );
// => false

bool = isNonPositiveIntegerArray( [] );
console.log( bool );
// => false
