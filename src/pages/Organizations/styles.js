import {StyleSheet} from 'react-native';
import {colors, metrics} from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter,
  },
  loading: {
    marginTop: metrics.baseMargin * 2,
  },
  columnWrapper: {
    marginHorizontal: metrics.baseMargin * 2,
    justifyContent: 'space-between',
  },
  infoNotFound: {
    marginTop: metrics.baseMargin,
    padding: metrics.basePadding,
    color: colors.primary,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default styles;
