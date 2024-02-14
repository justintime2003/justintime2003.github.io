# -*- coding: utf-8 -*-
"""
Created on Sun Jan 24 16:00:46 2021

File name: ThresholdBeats.py
Author: You!
Date: 2/23/2023

Use this function to develop the for loop cross correlation. Only adjust
code within the "TODO" brackets to ensure that this code will still work
with the main script.

@author: Calvin
"""

import numpy as np

def main(): 
    test_matrix = np.array([6, 1, 5,7 ,8, 10])
    #cross_corr = np.transpose(temp_matrix)
    print(ThresholdBeats(test_matrix))


def ThresholdBeats(cross_corr):
    # Setup the output for spike train
    threshold = 7;
    beats = np.zeros( [cross_corr.shape[0], 1] )
    for i in range(beats.shape[0]):
        if cross_corr[i] >= threshold:
            beats[i] = 1; 
    return beats

"""
The following code allows us to run this file as a script. Note, this not the
only way to do this, but the benefit of using this method is that all the
variables that are created as part of the script have local scope.
"""
if __name__ == "__main__":
    main()
