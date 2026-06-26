import { FlatList, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import programs from '../../data/programs.json';
import ProgramCard from '../../components/ProgramCard';
import type { RootStackParamList, Program } from '../../types';
import { styles } from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <FlatList
        data={programs}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }: { item: Program }) => (
          <ProgramCard
            program={item}
            onPress={(program: Program) => navigation.navigate('Details', { program })}
          />
        )}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
