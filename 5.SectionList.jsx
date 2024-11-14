import React from 'react';
import { View, Text, SectionList, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function App() {
  // Directly define the sections with grouped contacts
  const sections = [
    {
      title: 'A',
      data: [
        { name: 'Alice Johnson', phone: '123-456-7890', email: 'alice@example.com' },
      ],
    },
    {
      title: 'B',
      data: [
        { name: 'Bob Smith', phone: '234-567-8901', email: 'bob@example.com' },
      ],
    },
    {
      title: 'C',
      data: [
        { name: 'Charlie Brown', phone: '345-678-9012', email: 'charlie@example.com' },
      ],
    },
    {
      title: 'D',
      data: [
        { name: 'David Wilson', phone: '456-789-0123', email: 'david@example.com' },
      ],
    },
    {
      title: 'E',
      data: [
        { name: 'Eva Green', phone: '567-890-1234', email: 'eva@example.com' },
      ],
    },
    {
      title: 'F',
      data: [
        { name: 'Frank White', phone: '678-901-2345', email: 'frank@example.com' },
      ],
    },
    {
      title: 'G',
      data: [
        { name: 'George Harris', phone: '789-012-3456', email: 'george@example.com' },
      ],
    },
    {
      title: 'H',
      data: [
        { name: 'Hannah Davis', phone: '890-123-4567', email: 'hannah@example.com' },
      ],
    },
  ];

  // Render the individual contact item
  const renderItem = ({ item }) => (
    <View style={styles.contactItem}>
      <Text style={styles.contactName}>{item.name}</Text>
      <Text>Phone: {item.phone}</Text>
      <Text>Email: {item.email}</Text>
      <TouchableOpacity
        style={styles.contactButton}
        onPress={() => Alert.alert('Contact Info', `Name: ${item.name}\nPhone: ${item.phone}\nEmail: ${item.email}`)}
      >
        <Text style={styles.contactButtonText}>View Details</Text>
      </TouchableOpacity>
    </View>
  );

  // Render section headers
  const renderSectionHeader = ({ section }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionHeaderText}>{section.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contacts List</Text>
      <SectionList
        sections={sections}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListHeaderComponent={() => <Text style={styles.listHeader}>Grouped by First Letter</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  listHeader: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10,
    color: '#555',
  },
  sectionHeader: {
    backgroundColor: '#ddd',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  sectionHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  contactItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
    elevation: 2, // Adds shadow for Android
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  contactButton: {
    marginTop: 10,
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  contactButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 5,
  },
});
