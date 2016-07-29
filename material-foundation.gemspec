Gem::Specification.new do |s|
  s.name        = 'material-foundation'
  s.version     = '0.0.3'
  s.date        = '2016-07-29'
  s.summary     = "Material Design version of Foundation for Sites by Zurb"
  s.description = "Material Design version of Foundation for Sites by Zurb"
  s.authors     = ["eucalyptuss"]
  s.email       = 'nick@quaran.to'
  s.files         = `git ls-files`.split($/)
  s.executables   = s.files.grep(%r{^bin/}) { |f| File.basename(f) }
  s.test_files    = s.files.grep(%r{^(test|spec|features)/})
  s.require_paths = ["lib"]
  s.homepage    = 'https://github.com/coderbhai/material-foundation'
  s.license       = 'MIT'
end
