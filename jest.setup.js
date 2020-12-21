import * as emotion from '@emotion/core'
import { createSerializer } from 'jest-emotion'
import { configure } from 'enzyme'
import { matchers } from 'jest-emotion'

import 'jest-enzyme'

import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })
expect.extend(matchers)
expect.addSnapshotSerializer(createSerializer(emotion))
