## 캠페이너스 소스를 받아서 css와 js를 로드하고, 커스톰 css 파일을 추가해 새로운 카피를 만들고 로컬에서 띄운다.
## 현재는 main.html 에 대해서만 작동함

require 'fileutils'
# require 'nokogiri'
# require 'open-uri'
require 'launchy'
require 'git'

g = Git.open('.')
# puts g.log[0]
original_html_directory = './main.html'
original_filename = original_html_directory.split('/').last
original_directory = original_html_directory.gsub(original_filename, "")
temp_dir = original_directory + "temp/pages/" + original_filename.split(".")[0] + "/"
FileUtils.rm_rf(temp_dir)
FileUtils.mkdir_p temp_dir
# Dir.mkdir(temp_dir) unless File.exists?(temp_dir)

new_filename = original_filename.split(".")[0] + "_" + g.log[0].to_s + "." + original_filename.split(".")[1]

# FileUtils.cp(original_html_directory, temp_dir + new_filename)

copied_html_directory = temp_dir + new_filename
# puts copied_html_directory
copied_file = File.open(copied_html_directory, "w")

File.open(original_html_directory, 'r') do |file|
  file.each do |line|
    if line.include?('<link rel="canonical" href="https://taiwhafound.campaignus.me/" />')
      copied_file.print line.sub('<link rel="canonical" href="https://taiwhafound.campaignus.me/" />', '<link rel="canonical" href="https://taiwhafound.campaignus.me/" /> <link rel="stylesheet" type="text/css" href="../../../modification.css" />')
    end

    if line.include?("href='/css")
      copied_file.print line.sub("href='/css", "href='https://taiwhafound.campaignus.me/css")
    elsif line.include?("src='/js")
      copied_file.print line.sub("src='/js", "src='https://taiwhafound.campaignus.me/js")
    else
      copied_file.print line
    end

    if line.include?('</script></body>')
      copied_file.print line.sub('</script></body>', '</script><script src="../../../modification.js"></script></body>')
    end
  end
end

copied_file.close

Launchy.open(copied_html_directory)
