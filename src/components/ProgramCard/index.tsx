import { Pressable, Text, View } from 'react-native';
import type { Program } from '../../types';
import { styles } from './styles';

type Props = {
  program: Program;
  onPress: (program: Program) => void;
};

export default function ProgramCard({ program, onPress }: Props) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        pressed && styles.cardPressed,
      ]}
      onPress={() => onPress(program)}
    >
      <View style={styles.header}>
        <Text style={styles.universityName}>{program.university}</Text>
        <View style={styles.countryBadge}>
          <Text style={styles.countryText}>{program.country}</Text>
        </View>
      </View>
      <Text style={styles.description} numberOfLines={2}>
        {program.description}
      </Text>
    </Pressable>
  );
}
