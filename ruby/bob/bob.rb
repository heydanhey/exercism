# The Bob Class
class Bob
  def self.hey(remark)
    remark = remark.gsub(/\s/, '')
    if remark.empty?
      'Fine. Be that way!'
    elsif !remark.gsub(/[^a-zA-Z]/, '').empty? && remark == remark.upcase
      'Whoa, chill out!'
    elsif remark[-1] == '?'
      'Sure.'
    else
      'Whatever.'
    end
  end

  module BookKeeping
    VERSION = 1
  end
end
