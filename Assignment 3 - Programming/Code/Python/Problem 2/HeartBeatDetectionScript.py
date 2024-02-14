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
    
    #######################
    # PART 1 - Data Storage
    #######################
    ecg_data = LoadDataBinary( "Data/ECG_Signal.bin" )
    
    ##########################################################################
    # 2.1 - TODO
    ##########################################################################
    # The following code is already written for you and demonstrates how to
    # plot data. But you will have to uncomment it out for it to run.
    fig1 = plt.figure(1)
    fig1.clf()
    ax = fig1.add_subplot(1,1,1)
    ax.plot( ecg_data[:,0], ecg_data[:,1] )
    ax.set(xlabel="Time (s)", ylabel="Voltage (microvolts)")
    ax.set_title("BMEG 257 ECG REcording")
    #plt.show() #added to popup diagram

    ##########################################################################
    # 2.2 - TODO
    ##########################################################################
    # Use this space to explore the size of the neural_data variable.
    #print(ecg_data.size); 
    #print(ecg_data.shape);
    
    ##########################################################################
    # 2.4 - TODO
    ##########################################################################
    # Use this space to save the neural_data as a csv file.
    # Hint: Look up the "savetxt" function in numpy. There are other methods
    # to save data to csv, but this is the one I usually use.
    
    # Use this filename to save your data (it will go into the data folder)
    filename = 'Data/neural_data.csv'
    #np.savetxt(filename, ecg_data, fmt='%.6g', delimeter=',')
    
    
    ############################
    # PART 2 - Cross Correlation
    ############################
    
    ##########################################################################
    # 2.5 - TODO
    ##########################################################################
    # This code loads in the heart beat that we will be
    # using. Please plot it here (refer to 1.1 on how plotting works) and
    # also refer to the python plotting documentation.
    # Hint, before you plot, remember to create a new figure. Otherwise your
    # plots will go into the same figure as 1.1
    
    heartbeat = LoadDataBinary( 'Data/template.bin' );
    fig2 = plt.figure(2)
    fig2.clf()
    ax = fig2.add_subplot(1,1,1)
    ax.plot( heartbeat[:,0], heartbeat[:,1] )
    ax.set(xlabel="Time (s)", ylabel="Voltage (microvolts)")
    ax.set_title("Heartbeat sample")
    #plt.show() #Added for diagram popup
    
    ##########################################################################
    # 2.6 - TODO
    ##########################################################################
    # DO NOT ADJUST CODE HERE. OPEN THE FILE "ForLoopCrossCorr.py" AND PUT YOUR
    # CODE THERE.
    
    for_cross_data = ForLoopCrossCorr( ecg_data[:,1], heartbeat[:,1] );
    
    ##########################################################################
    # 2.7 - TODO
    ##########################################################################
    # DO NOT ADJUST CODE HERE. OPEN THE FILE "MatrixCrossCorr.py" AND PUT YOUR
    # CODE THERE.
    
    mat_cross_data = MatrixCrossCorr( ecg_data[:,1], heartbeat[:,1] );
    
    
    ##########################################################################
    # 2.8 - TODO
    ##########################################################################
    # DO NOT ADJUST CODE HERE. OPEN THE FILE "ThresholdBeats.py" AND PUT YOUR
    # CODE THERE.
    
    for_beats = ThresholdBeats( for_cross_data );
    mat_beats = ThresholdBeats( mat_cross_data );
    
    
    ##########################################################################
    # 2.8 - END TODO
    ##########################################################################
    # THIS CODE WILL HELP VISUALIZE YOUR HEART BEATS. DO NOT ADJUST.
    fig10 = plt.figure(10);
    fig10.clf()
    ax = fig10.add_subplot(2,1,1)
    ax.plot( ecg_data[:,0], ecg_data[:,1] )
    ax.set(xlabel="Time (s)", ylabel="Voltage (microvolts)")
    ax.set_title( "Raw ECG Measurement" );
    #plt.show() #Added for diagram popup
    
    ax = fig10.add_subplot(2,1,2)
    ax.plot( ecg_data[:for_cross_data.shape[0],0], for_beats[:,0] )
    ax.set(xlabel="Time (s)")
    ax.set_title( 'Heart Beats (For Loops)' );
    #plt.show() #Added for diagram popup
   
    fig11 = plt.figure(11)
    fig11.clf()
    ax = fig11.add_subplot(2,1,1)
    ax.plot( ecg_data[:,0], ecg_data[:,1] )
    ax.set( ylabel = "Voltage (microvolts)");
    ax.set_title( "Raw ECG Measurement" );
    #plt.show() #Added for diagram popup
    
    ax = fig11.add_subplot( 2,1,2 )
    ax.plot( ecg_data[:mat_cross_data.shape[0],0], mat_beats[:,0] )
    ax.set( xlabel = "Time (s)");
    ax.set_title( 'Heart Beats (Matrices)' );
    plt.show() #Added for diagram popup

    fig12 = plt.figure(12)
    fig12.clf()
    ax = fig12.add_subplot(2,1,1)
    ax.plot( ecg_data[:for_cross_data.shape[0],0], for_beats[:,0] )
    ax.set(xlabel="Time (s)")
    ax.set_title( 'Heart Beats (For Loops)' );
    #plt.show() #Added for diagram popup
    
    ax = fig12.add_subplot( 2,1,2 )
    ax.plot( ecg_data[:mat_cross_data.shape[0],0], mat_beats[:,0] )
    ax.set( xlabel = "Time (s)");
    ax.set_title( 'Heart Beats (Matrices)' );
    plt.show() #Added for diagram popup
    

"""
The following code allows us to run this file as a script. Note, this not the
only way to do this, but the benefit of using this method is that all the
variables that are created as part of the script have local scope.
"""
if __name__ == "__main__":
    main()
