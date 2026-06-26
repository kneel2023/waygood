import { ScrollView, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../types';
import { styles } from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

export default function DetailsScreen({ route }: Props) {
  const { program } = route.params;

  const details = [
    { label: 'Country', value: program.country },
    { label: 'World Ranking', value: program.ranking },
    { label: 'Programs Offered', value: program.programsOffered },
    { label: 'Average Tuition', value: program.avgTuition },
    { label: 'Student Population', value: program.studentPopulation.toLocaleString() },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.headerCard}>
        <Text style={styles.universityName}>{program.university}</Text>
        <View style={styles.countryBadge}>
          <Text style={styles.countryText}>{program.country}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.description}>{program.fullDescription}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Details</Text>
        <View style={styles.detailsContainer}>
          {details.map((detail) => (
            <View key={detail.label} style={styles.detailRow}>
              <Text style={styles.detailLabel}>{detail.label}</Text>
              <Text style={styles.detailValue}>{detail.value}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
