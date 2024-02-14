"""
Neural Networks for Handwritten Digit Recognition
Binary Classificaiton MNIST

Recognize digits between 0 and 1
"""

#Import packages
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense
import matplotlib.pyplot as plt
from autils import*
#%matplotlib inline

import logging
logging.getLogger("tensorflow").setLevel(logging.ERROR)
tf.autograph.set_verbosity(0)

#load dataset
X, y = load_data()

print('The shape of X is: ', X.shape)
