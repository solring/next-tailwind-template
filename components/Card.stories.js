import Card from "./Card"
import IconTemp from './Icon.stories'
import Icon from './Icon'

export default {
  title: 'Components/Card',
  component: Card
}
const Template = (args) => <Card {...args}>This is content.</Card>
export const Default = Template.bind({})
Default.args = {
  link: "http://www.google.com",
  title: "Card component",
  icon: <Icon name="assignment" className="text-white"/>
}