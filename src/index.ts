import { parser } from './syntax.grammar';
import {
  LRLanguage,
  LanguageSupport,
  indentNodeProp,
  foldNodeProp,
  foldInside,
  delimitedIndent,
} from '@codemirror/language';
import { styleTags, tags as t } from '@lezer/highlight';

export const logLanguage = LRLanguage.define({
  name: 'log',
  parser: parser.configure({
    props: [
      styleTags({
        Date: t.string,
      }),
    ],
  }),
});

export function log() {
  return new LanguageSupport(logLanguage);
}
