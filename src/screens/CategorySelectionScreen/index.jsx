// CategorySelectionPage.js
import PropTypes from 'prop-types';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';

function CategorySelectionScreen({ navigation }) {
  const categories = ['Math', 'Science', 'English', 'Coding'];

  const handleCategorySelect = (category) => {
    navigation.navigate('QuizPage', {
      category,
    }); // Pass selected category to QuizPage
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Category</Text>
      <View style={styles.categoriesContainer}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={styles.categoryButton}
            onPress={() => handleCategorySelect(category)}
          >
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

CategorySelectionScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default CategorySelectionScreen;
