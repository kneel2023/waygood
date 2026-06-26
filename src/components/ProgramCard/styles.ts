import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    flexWrap: 'wrap',
    gap: 8,
  },
  universityName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
    flex: 1,
  },
  countryBadge: {
    backgroundColor: '#e8f0fe',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  countryText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#1a73e8',
  },
  description: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
  },
});
