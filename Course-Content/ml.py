# Importing required libraries
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression

# Data: Sizes (independent variable) and Prices (dependent variable)
sizes = np.array([1400, 1600, 1700, 1875, 1100, 1550]).reshape(-1, 1)  # Features (Size)
prices = np.array([245000, 312000, 279000, 308000, 199000, 219000])   # Target (Price)

# Create and train the Linear Regression model
model = LinearRegression()
model.fit(sizes, prices)

# Predict the price of a new house with size 1500 sq ft
predicted_price = model.predict([[1500]])
print(f"Predicted price for a 1500 sq ft house: ${predicted_price[0]:,.2f}")

# Plotting the data and the linear regression line
plt.scatter(sizes, prices, color='blue')  # Actual data points
plt.plot(sizes, model.predict(sizes), color='red')  # Predicted linear regression line
plt.title('House Prices vs Size')
plt.xlabel('Size (sq ft)')
plt.ylabel('Price ($)')
plt.show()
