import _ from 'lodash'
import $ from 'jquery'
import './index.scss'
import jpg from './rebaQ1.jpg'

var img1 = document.createElement("img");
img1.src = jpg
document.body.appendChild(img1);

function component() {
  var $div = $('<div/>')

  $div.html( _.join(['Hello', 'Reba'], ' ') )

  return $div
}

$(document.body).append(component())