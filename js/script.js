// Copyright (c) 2024 Manya All rights reserved
//
// Created by: Manya
// Created on: Apr 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates volume of a pyramid.
 */
function calculateVolumeOfPyramid() {
  // input
  const length = parseFloat(document.getElementById("length-of-pyramid").value)
  const width = parseFloat(document.getElementById("width-of-pyramid").value)
  const height = parseFloat(document.getElementById("height-of-pyramid").value)

  // process
  const volumeOfPyramid = (lengthOfPyramid * widthOfPyramid * heightOfPyramid) / 3

  // output
  document.getElementById('volume').innerHTML = 'Volume is: ' + volumeOfPyramid + ' mm³'
}
