import numpy as np

heartbeat = np.array([0, 3, -1, 0]) #size of 4
ecg_data = np.array([1, 2, 0, 0, 0, 3, -1, 0, 0]) #size of 9
answer = np.zeros([6, 1]) #dimensions of cross_data increased to 6,1

for i in range(6): #range increased to 6
    sum = 0
    temp_matrix = ecg_data[i:i+4]
    sum = np.dot(heartbeat, temp_matrix)
    answer[i] = sum

print(answer)
