#!/usr/bin/perl -w

# run like this
# ./geturl.pl < ../.././node_modules/@dbcdk/dbc-config/configs/mobilsoeg.config.js

# generate space seperated list with:
# protocol+host path envname port
# http://moreinfo.addi.dk /2.1/moreinfo.wsdl MOREINFO_SERVICE_URL 9900

use strict;


my %hosts;
while (<>){
    # !!! HTTPS + localhost ignored
    if (/'((https?):\/\/.*?)[\/']/){
	my $proto = $2;
	# force rewrite for now!
	$proto = 'http';
	my $host = $1;
	if ($host =~ /localhost/){
	    warn "ignore: $proto $host\n";
	    next;
	}
	# parse env, e.g. process.env.BORCHK_SERVICE_URL
	unless (/process\.env\.(\S+)/){
	    warn "no ENV: $_";
	    next;
	}
	my $env = $1;
	# parse whole url
	unless (/'https?:\/\/[^?\/]+(.*?)'/){
	    warn "no url??: $_";
	    next;
	}
	my $url = $1;
		
	warn "add $host\n";
	$hosts{$host} = "$url $env";
    }
}

my $port = 9900;
for (sort keys %hosts){
    print "$_ $hosts{$_} $port\n";
    $port++;
}
