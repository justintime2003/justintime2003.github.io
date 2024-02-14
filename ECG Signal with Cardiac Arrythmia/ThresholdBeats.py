# -*- coding: utf-8 -*-
"""
Created on Sun Jan 24 16:00:46 2021

File name: ThresholdBeats.py
Author: Justin The
Date: 2/23/2023

Use this function to develop the for loop cross correlation. Only adjust
code within the "TODO" brackets to ensure that this code will still work
with the main script.

@author: Calvin
"""

import numpy as np

def ThresholdBeats( cross_corr ):
    # Setup the output for spike train
    beats = np.zeros( [cross_corr.shape[0], 1] )
    ###########################################################################
    # 2.8 - TODO
    ###########################################################################
    # Implement your thresholding here. The beats vector above
    # is already set up as your output and is the same size as the input
    # cross correlation. When you identify a heartbeat (e.g. cross correlation
    # exceeds threshold), set the corresponding location in beats to
    # 1.
    threshold = 7
    beats = np.zeros( [cross_corr.shape[0], 1] )
    for i in range(beats.shape[0]):
        if cross_corr[i] >= threshold:
            beats[i] = 1; 
    ###########################################################################
    # 2.8 - END TODO
    ###########################################################################
    return beats
