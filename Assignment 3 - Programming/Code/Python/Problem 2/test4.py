# -*- coding: utf-8 -*-
"""
Created on Fri Jan 22 16:23:44 2021

File: HeartBeatDetectionScript.py
Author: You!
Date: 2/23/2023

This is the main script for Problem 2 of the programming assignment in BMEG 257
This script has various "TODO" sections where you will be required to fill
in code. This script also relies on a number of functions located in other 
files that you need to develop in order to run properly. Note, the file setup
here was to best match the matlab setup. In reality, most people will group
relevant functions in a single python file.

@author: Calvin
"""

# Imports - tell python to load in other libraries that will be used
# You should not need to import anything else.
import numpy as np
import matplotlib.pyplot as plt
from LoadDataBinary import LoadDataBinary
from ForLoopCrossCorr import ForLoopCrossCorr
from MatrixCrossCorr import MatrixCrossCorr
from ThresholdBeats import ThresholdBeats

# The main script
def main():
    
    heartbeat = LoadDataBinary( 'Data/template.bin' );
    fig1 = plt.figure(1)
    fig1.clf()
    ax = fig1.add_subplot(1,1,1)
    ax.plot( heartbeat[:,0], heartbeat[:,1] )
    ax.set(xlabel="Time (s)", ylabel="Voltage (microvolts)")
    ax.set_title("BMEG257 HeartBeat Diagram")
    plt.show() #added to popup diagram
    

"""
The following code allows us to run this file as a script. Note, this not the
only way to do this, but the benefit of using this method is that all the
variables that are created as part of the script have local scope.
"""
if __name__ == "__main__":
    main()
